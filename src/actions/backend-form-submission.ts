'use server';

import BackendSubmissionEmailTemplate from '@/components/email/backend-email-template';
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { backendFormSchema } from '@/schema/backend-form-schema';
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
    };

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
    });

    // Send confirmation email to the user
    await sendEmail({
      to: validatedData.email,
      replyTo: validatedData.email,
      subject: 'We Received Your email...',
      react: BackendSubmissionEmailTemplate({
        formData: validatedData,
      }),
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

  return redirect(`/form-sumission-result?status=${status}&errors=${errors}`);
};
