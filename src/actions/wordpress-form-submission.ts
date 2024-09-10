'use server';

import WordPressSubmissionEmail from '@/components/email/wordpress-email-template';
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { wordpressFormSchema } from '@/schema/wordpress-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const wordpressFormSubmission = async (formData: FormData) => {
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

    // Validate form data with Zod schema
    const validatedData = wordpressFormSchema.parse({
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

    // Send email to 3Zero Digital
    await sendEmail({
      to: process.env.EMAIL_TO!,
      replyTo: validatedData.email,
      subject: 'New WordPress Project Submission',
      react: WordPressSubmissionEmail({
        formData: validatedData,
      }),
    });

    // Send confirmation email to the user
    await sendEmail({
      to: validatedData.email,
      replyTo: validatedData.email,
      subject: 'We Received Your WordPress Project Submission',
      react: WordPressSubmissionEmail({
        formData: validatedData,
      }),
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, wordpressFormSchema);
    }
    status = 'error';
  }

  return redirect(`/form-submission-result?status=${status}&errors=${errors}`);
};
