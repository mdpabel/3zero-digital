import { getSwellCurrentUser } from './get-current-user';
import swell from './swell-server';
import { type ResultsResponse, type Order } from 'swell-js';

export const getOrders = async (): Promise<ResultsResponse<Order>> => {
  const account_id = await getSwellCurrentUser();

  return await swell.get('/orders', {
    where: {
      account_id: account_id,
    },
    limit: 25,
    page: 1,
  });
};

export const getOrder = async (
  id: string,
): Promise<Order | null | undefined> => {
  if (!id) return;

  const account_id = await getSwellCurrentUser();

  return await swell.get(`/orders/${id}`, {
    where: {
      account_id: account_id,
    },
  });
};
