import swell from './swell-client';
import {} from 'swell-js';

export const getProduct = async (name: string) => {
  return await swell.products.list();
};
