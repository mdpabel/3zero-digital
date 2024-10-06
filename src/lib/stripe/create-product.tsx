import retry from 'p-retry';
import { stripe } from './stripe';

// Utility to create a Stripe Product
export async function createStripeProduct(name: string, categoryId?: string) {
  return retry(
    async () => {
      return stripe.products.create({
        name,
        metadata: { categoryId: categoryId || '' },
      });
    },
    { retries: 3 },
  );
}
