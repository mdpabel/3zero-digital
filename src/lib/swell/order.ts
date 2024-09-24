import { getSwellCurrentUser } from './get-current-user';
import swell from './swell-client';
import { type ResultsResponse, type Order } from 'swell-js';

export const getOrders = async ({ limit = 10, page = 1 } = {}) => {
  return await swell.account.listOrders({
    limit,
    page,
  });
};

export const getOrder = async (id: string) => {
  return await swell.account.getOrder(id);
};
