import { generateToken } from '@/actions/generate-swell-token';
import swell from './swell-client';

type Account = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export const login = async ({ email, password }: Account) => {
  return await swell.account.login(email, password);
};

export const loginWithToken = async (email: string) => {
  const { token } = await generateToken();
  return await swell.account.login(email, {
    password_token: token,
  });
};

export const createAccount = async ({
  email,
  firstName,
  lastName,
  password,
}: Account) => {
  return await swell.account.create({
    email,
    email_optin: true,
    password,
    first_name: firstName ?? '',
    last_name: lastName ?? '',
  });
};

export const logout = async () => {
  return await swell.account.logout();
};

export const getUser = async () => {
  return await swell.account.get();
};
