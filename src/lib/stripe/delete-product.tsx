import { stripe } from './stripe';

export const deleteStripeProduct = async (stripeProductId: string) => {
  if (stripeProductId) {
    console.error("The product doesn't exist on stripe");
  }
  try {
    await stripe.products.update(stripeProductId, {
      active: false,
    });
  } catch (error) {
    console.error('Error deleting stripe product:', error);
    throw new Error('Error deleting stripe product');
  }
};
