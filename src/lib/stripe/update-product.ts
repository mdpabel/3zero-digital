import retry from 'p-retry';
import { stripe } from './stripe';

export async function updateStripeProduct(
  stripeProductId: string,
  name: string,
  categoryId?: string,
) {
  try {
    const stripeProduct = await retry(
      async () => {
        return stripe.products.update(stripeProductId, {
          name,
          metadata: {
            categoryId: categoryId || '',
          },
        });
      },
      { retries: 3, factor: 2 },
    );

    return stripeProduct;
  } catch (error) {
    console.error('Error updating Stripe product:', error);
    throw new Error('Failed to update the product in Stripe.');
  }
}
