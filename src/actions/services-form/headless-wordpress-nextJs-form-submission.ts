'use server';

import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import HeadlessWordPressSubmissionEmail from '@/components/email/headless-wordpress-email-template';
import { headlessWordPressFormSchema } from '@/schema/services/headless-wordpress-form-schema';

export const HeadlessWordPressNextJsFormSubmission = async (
  formData: FormData,
) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract form data
    const data = {
      websiteType: formData.get('websiteType'),
      budget: formData.get('budget'),
      pages: formData.get('pages'),
      timeline: formData.get('timeline'),
      functionalities: formData.getAll('functionalities'),
      sampleSites: formData.get('sampleSites'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate form data
    const validatedData = headlessWordPressFormSchema.parse({
      websiteType: data.websiteType,
      budget: data.budget,
      pages: data.pages,
      timeline: data.timeline,
      functionalities: data.functionalities,
      sampleSites: data.sampleSites,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO!, // Email destination
      replyTo: validatedData.email,
      subject: 'New Headless WordPress & Next.js Development Submission',
      react: HeadlessWordPressSubmissionEmail({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, headlessWordPressFormSchema);
    }
    status = 'error';
  }

  // Redirect with status and errors (if any)
  return redirect(
    `/form-submission-result?status=${status}&errors=${encodeURIComponent(
      errors,
    )}`,
  );
};
