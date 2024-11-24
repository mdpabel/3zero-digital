'use server';

import BackendSubmissionEmailTemplate from '@/components/email/backend-email-template';
import { verifyCfTurnstileToken } from '@/lib/security/cf-turnstile';
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { backendFormSchema } from '@/schema/services/backend-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const backendFormSubmission = async (formData: FormData) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract and validate form data
    const data = {
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      functionalities: formData.getAll('functionalities'),
      sampleSites: formData.get('sampleSites'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      token: formData.get('cf-token'),
    };

    // Verify Turnstile token
    const token = data.token as string;

    if (token) {
      const res = await verifyCfTurnstileToken(token);

      if (!res) {
        return;
      }
    }

    // Validate form data with Zod schema
    const validatedData = backendFormSchema.parse({
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      functionalities: data.functionalities,
      sampleSites: data.sampleSites,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // If validation passes, send the email
    await sendEmail({
      to: process.env.EMAIL_TO!,
      replyTo: validatedData.email,
      subject: 'New Backend Form Submission',
      react: BackendSubmissionEmailTemplate({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    status = 'success';
  } catch (err) {
    // If validation fails, handle the error
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, backendFormSchema);
    }
    // Handle other errors (e.g., email sending failed)
    status = 'error';
  }

  redirect(`/form-submission-result?status=${status}&errors=${errors}`);
};
