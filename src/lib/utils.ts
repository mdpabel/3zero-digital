import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';
import { Schema, z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function catchClerkError(err: unknown) {
  const unknownErr = 'Something went wrong, please try again later.';
  if (isClerkAPIResponseError(err)) {
    const message = err.errors[0]?.longMessage ?? unknownErr;

    return message;
  } else {
    return unknownErr;
  }
}

export function catchZodErrors(err: z.ZodError, schema: Schema) {
  const errors: string[] = [];
  const error = err.flatten().fieldErrors;

  for (const key in error) {
    if (Object.prototype.hasOwnProperty.call(error, key)) {
      const err = key as keyof z.infer<typeof schema>;
      const message = error[err] ? error[err][0] : '';

      if (message) {
        errors.push(message);
      }
    }
  }

  return errors.toString();
}
