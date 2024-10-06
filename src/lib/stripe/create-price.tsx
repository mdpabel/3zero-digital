import retry from 'p-retry';
import { stripe } from './stripe';

export async function createStripePrices(
  type: 'STANDARD' | 'SUBSCRIPTION',
  stripeProductId: string,
  prices: any[],
  price?: number,
) {
  const stripePricePromises: Promise<any>[] = [];

  if (type === 'STANDARD') {
    if (!price) {
      throw new Error('Price is required for standard products');
    }

    const stripePricePromise = retry(
      async () => {
        return stripe.prices.create({
          unit_amount: Math.round(price * 100),
          currency: 'usd',
          product: stripeProductId,
        });
      },
      { retries: 3 },
    );

    stripePricePromises.push(stripePricePromise);
  } else if (type === 'SUBSCRIPTION') {
    prices.forEach((subscriptionPrice) => {
      let interval: 'MONTH' | 'QUARTER' | 'YEAR';
      let interval_count = 1;

      if (subscriptionPrice.billingInterval === 'month') {
        interval = 'MONTH';
      } else if (subscriptionPrice.billingInterval === 'quarter') {
        interval = 'QUARTER';
        interval_count = 3;
      } else if (subscriptionPrice.billingInterval === 'year') {
        interval = 'YEAR';
      } else {
        throw new Error('Invalid billing interval');
      }

      const stripeSubscriptionPricePromise = retry(
        async () => {
          return stripe.prices.create({
            unit_amount: Math.round(subscriptionPrice.unitAmount * 100),
            currency: 'usd',
            recurring: {
              interval:
                subscriptionPrice.billingInterval === 'quarter'
                  ? 'month'
                  : subscriptionPrice.billingInterval,
              interval_count,
            },
            product: stripeProductId,
          });
        },
        { retries: 3 },
      );

      stripePricePromises.push(stripeSubscriptionPricePromise);
    });
  }

  return Promise.all(stripePricePromises);
}
