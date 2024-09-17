import { currentUser } from '@clerk/nextjs/server';

export const getSwellCurrentUser = async (): Promise<string | null> => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error('User is not authenticated');
    }
    const privateMetadata = user?.privateMetadata;

    const swellAccountId = privateMetadata?.swellAccountId as
      | string
      | undefined;

    if (!swellAccountId) {
      console.warn('Swell account ID is missing in the user metadata');
      return null;
    }

    return swellAccountId;
  } catch (error) {
    console.error('Error retrieving current user or Swell account ID:', error);
    throw error;
  }
};
