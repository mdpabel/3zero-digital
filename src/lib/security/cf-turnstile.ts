export const verifyCfTurnstileToken = async (token: string) => {
  try {
    const secretKey = process.env.TURNSTILE_SECRET_KEY!;

    if (secretKey) {
      throw new Error('CF turnstile secrete key is required');
    }

    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    // formData.append('remoteip', ip);
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();
    if (outcome.success) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};
