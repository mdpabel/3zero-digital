import { SignJWT, jwtVerify } from 'jose';

// The secret key you will use to sign the JWT
const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Define a TypeScript type for the token payload
export type TokenPayload = {
  email: string;
  timestamp: number;
  iat: number; // issued at timestamp
  exp: number; // expiration timestamp
};

// Generate the JWT token
export async function generateToken({ email }: { email: string }) {
  try {
    // Create the JWT and sign it with the secret key
    const token = await new SignJWT({
      email,
      timestamp: Date.now(),
    })
      .setProtectedHeader({ alg: 'HS256' }) // Specify the algorithm (HS256)
      .setIssuedAt() // Optionally set an issued-at timestamp
      .setExpirationTime('1h') // Set the expiration time (e.g., 1 hour)
      .sign(new TextEncoder().encode(SECRET_KEY)); // Sign with the secret key

    console.log('Generated JWT:', token);
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Failed to generate token');
  }
}

// Verify the JWT token
export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    // Verify and decode the token
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(SECRET_KEY),
    );

    // Type assertion to ensure the payload follows the TokenPayload structure
    const typedPayload = payload as TokenPayload;

    // You can return the payload (decoded data) here or perform other actions
    console.log('Decoded token payload:', typedPayload);
    return typedPayload;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw new Error('Invalid or expired token');
  }
}
