'use server';

import MernSubmissionEmail from '@/components/email/mern-email-template';
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { mernFormSchema } from '@/schema/services/mern-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const mernFormSubmission = async (formData: FormData) => {
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

    // Validate form data with Zod schema
    const validatedData = mernFormSchema.parse({
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
      subject: 'New MERN stact Form Submission',
      react: MernSubmissionEmail({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, mernFormSchema);
    }
    status = 'error';
  }

  return redirect(`/form-submission-result?status=${status}&errors=${errors}`);
};
