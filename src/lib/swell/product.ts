import swell from './swell-client';

export const getProduct = async (name: string) => {
  return await swell.products.get(name);
};
