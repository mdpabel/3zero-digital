'use server';

export async function checkDomainAvailabilityasync(
  previousState: any,
  payload: FormData,
): Promise<{ available: boolean; message: string }> {
  const apiKey = process.env.GODADDY_KEY;
  const apiSecret = process.env.GODADDY_SECRET;
  const environment = process.env.ENVIRONMENT; // Can be 'production' or 'ote'

  const domain = payload.get('domain')?.toString();

  if (!domain) {
    return {
      available: false,
      message: 'Domain name is missing in the request.',
    };
  }

  // Choose the correct base URL based on the environment
  const baseUrl =
    environment === 'production'
      ? 'https://api.godaddy.com'
      : 'https://api.ote-godaddy.com';

  const url = `${baseUrl}/v1/domains/available?domain=${domain}&checkType=FAST`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `sso-key ${apiKey}:${apiSecret}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      // Log the detailed error response
      const errorData = await response.json();
      console.error('Detailed Error Response:', errorData);

      return {
        available: false,
        message: `Error: ${response.statusText} (${response.status}) - ${
          errorData.message || 'Unknown error'
        }`,
      };
    }

    const data = await response.json();

    if (data.available) {
      return {
        available: true,
        message: `The domain ${domain} is available.`,
      };
    } else {
      return {
        available: false,
        message: `The domain ${domain} is not available.`,
      };
    }
  } catch (error: any) {
    console.error('Error checking domain availability:', error.message);
    return {
      available: false,
      message: `Error checking domain availability: ${error.message}`,
    };
  }
}
