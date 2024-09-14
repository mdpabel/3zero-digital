import swell from './swell-client';

export type AddToCart = {
  productId: string;
  quantity?: number;
  purchaseOption?: {
    type: 'standard' | 'subscription';
    planId: string;
  };
};

export const addToCart = async ({
  productId,
  purchaseOption,
  quantity,
}: AddToCart) => {
  const options = {
    productId,
    quantity: quantity || 1,
    purchaseOption: purchaseOption || {
      type: 'standard',
    },
  };

  const res = await swell.cart.addItem(options);
  return res;
};

export const removeFromCart = async (productId: string) => {
  return await swell.cart.removeItem(productId);
};

export type UpdateCart = {
  productId: string;
  quantity: number;
};

export const updateProductQuantity = async ({
  productId,
  quantity,
}: UpdateCart) => {
  return await swell.cart.updateItem(productId, {
    quantity,
  });
};

export const emptyCart = async () => {
  return await swell.cart.setItems([]);
};

export const getCart = async () => {
  return await swell.cart.get();
};
