'use server';

import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { htmlCssFormSchema } from '@/schema/services/html-css-static';
import HtmlCssSubmissionEmail from '@/components/email/html-css-static-email-template';

export const htmlCssFormSubmission = async (formData: FormData) => {
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
    const validatedData = htmlCssFormSchema.parse({
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
      to: process.env.EMAIL_TO!, // Recipient's email address
      replyTo: validatedData.email, // Reply to the user's email
      subject: 'New HTML/CSS Static Web Development Submission',
      react: HtmlCssSubmissionEmail({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, htmlCssFormSchema);
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
