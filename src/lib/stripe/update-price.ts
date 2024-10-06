import retry from 'p-retry';
import { stripe } from '@/lib/stripe/stripe';

export async function updateStripePrices(
  type: 'STANDARD' | 'SUBSCRIPTION',
  stripeProductId: string,
  newPrices: any,
  existingPrices: any[],
) {
  try {
    const stripePricePromises: Promise<any>[] = [];
    const pricesToDeactivate: string[] = [];

    // Loop through new prices
    for (let i = 0; i < newPrices.length; i++) {
      const newPrice = newPrices[i];
      const existingPrice = existingPrices[i];

      // Compare with existing price if available
      if (
        existingPrice &&
        existingPrice.unitAmount === newPrice.unitAmount * 100 &&
        existingPrice.billingInterval === newPrice.billingInterval
      ) {
        // If the price is the same, no need to create a new one
        continue;
      }

      // Mark old price for deactivation if a new price is being created
      if (existingPrice && existingPrice.id) {
        pricesToDeactivate.push(existingPrice.stripePriceId);
      }

      // Use retry for critical API calls like creating prices in Stripe
      const createPriceWithRetry = retry(
        async () => {
          if (type === 'STANDARD') {
            return stripe.prices.create({
              unit_amount: Math.round(newPrice.unitAmount * 100),
              currency: 'usd',
              product: stripeProductId,
            });
          } else if (type === 'SUBSCRIPTION') {
            let interval: 'month' | 'year';
            let intervalCount = 1;

            if (newPrice.billingInterval === 'month') {
              interval = 'month';
            } else if (newPrice.billingInterval === 'quarter') {
              interval = 'month';
              intervalCount = 3; // Quarterly billing simulation
            } else if (newPrice.billingInterval === 'year') {
              interval = 'year';
            } else {
              throw new Error('Invalid billing interval');
            }

            return stripe.prices.create({
              unit_amount: Math.round(newPrice.unitAmount * 100),
              currency: 'usd',
              recurring: {
                interval,
                interval_count: intervalCount,
              },
              product: stripeProductId,
            });
          }
        },
        { retries: 3, factor: 2 }, // Retry 3 times with exponential backoff
      );

      stripePricePromises.push(createPriceWithRetry);
    }

    // Await all new Stripe price creation promises
    const stripePrices = await Promise.all(stripePricePromises);

    // Deactivate old prices
    const deactivationPromises = pricesToDeactivate.map((priceId) =>
      stripe.prices.update(priceId, { active: false }),
    );
    await Promise.all(deactivationPromises);

    return stripePrices;
  } catch (error) {
    console.error('Error updating Stripe prices:', error);
    throw new Error('Failed to update prices in Stripe.');
  }
}
