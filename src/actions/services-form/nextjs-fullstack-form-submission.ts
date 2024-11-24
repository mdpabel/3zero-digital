'use server';

import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import FullstackSubmissionEmail from '@/components/email/fullstack-email-template';
import { fullStackFormSchema } from '@/schema/services/full-stack-form-schema';

export const nextJsFullStackFormSubmission = async (formData: FormData) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract form data
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

    // Validate form data
    const validatedData = fullStackFormSchema.parse({
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      functionalities: data.functionalities,
      sampleSites: data.sampleSites,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO!,
      replyTo: validatedData.email,
      subject: 'New Next.js Full Stack Development Submission',
      react: FullstackSubmissionEmail({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, fullStackFormSchema);
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
