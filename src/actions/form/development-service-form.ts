'use server';

import DevelopmentServiceFormTemplate from '@/components/email/development-service-form-email-template';
import { verifyCfTurnstileToken } from '@/lib/security/cf-turnstile';
import { sendEmail } from '@/lib/send-email';
import { DevelopmentServiceFormSchema } from '@/schema/services/development-service-form-schema';
import { z } from 'zod';

export const developmentFormSubmissionAction = async (
  _: any,
  formData: FormData,
) => {
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
        return {
          success: false,
          message: 'Turnstile verification failed. Please try again.',
        };
      }
    }

    // Validate form data with Zod schema
    const validatedData = DevelopmentServiceFormSchema.parse({
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
      react: DevelopmentServiceFormTemplate({
        formData: validatedData,
      }),
      name: validatedData.name,
    });

    return {
      success: true,
      message:
        'Your form has been successfully submitted. We will get back to you soon!',
    };
  } catch (err) {
    // Catch validation or any other errors and return appropriate message
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: `Validation Error: ${err.errors
          .map((e) => e.message)
          .join(', ')}`,
      };
    }

    console.error('Error submitting form:', err);
    return {
      success: false,
      message:
        'There was an error processing your submission. Please try again later.',
    };
  }
};
