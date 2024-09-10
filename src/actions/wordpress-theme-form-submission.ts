'use server';

import WordPressThemeSubmissionEmail from '@/components/email/wordpress-theme-email-template';
import { sendEmail } from '@/lib/send-email'; // Assuming you have a sendEmail utility
import { catchZodErrors } from '@/lib/utils';
import { wordpressThemeFormSchema } from '@/schema/wordpress-theme-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const wordpressThemeFormSubmission = async (formData: FormData) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract form data
    const data = {
      themeType: formData.get('themeType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      functionalities: formData.getAll('functionalities'),
      sampleSites: formData.get('sampleSites'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate form data with Zod schema
    const validatedData = wordpressThemeFormSchema.parse({
      themeType: data.themeType,
      budget: data.budget,
      timeline: data.timeline,
      functionalities: data.functionalities,
      sampleSites: data.sampleSites,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // Send confirmation email to the user
    await sendEmail({
      to: validatedData.email,
      replyTo: validatedData.email,
      subject: 'We Received Your WordPress Theme Project Submission',
      react: WordPressThemeSubmissionEmail({
        formData: validatedData,
      }),
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, wordpressThemeFormSchema);
    }
    status = 'error';
  }

  return redirect(`/form-submission-result?status=${status}&errors=${errors}`);
};
