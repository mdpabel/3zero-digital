import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function catchClerkError(err: unknown) {
  const unknownErr = 'Something went wrong, please try again later.';
  if (isClerkAPIResponseError(err)) {
    const message = err.errors[0]?.message ?? unknownErr;

    return message;
  } else {
    return unknownErr;
  }
}
