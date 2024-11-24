'use server';

import ContactUsEmailTemplate from '@/components/email/contact-us-email-template'; // Import the correct email template
import { verifyCfTurnstileToken } from '@/lib/security/cf-turnstile';
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { contactFormSchema } from '@/schema/contact-form-schema';
import { z } from 'zod';

export const contactUsSubmission = async (_: any, formData: FormData) => {
  try {
    // Extract form data
    const data = {
      inquiryType: formData.get('InquiryType'),
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
          status: false,
          message:
            'CAPTCHA verification failed. Please verify you are not a robot.',
        };
      }
    }

    // Validate form data using Zod schema
    const validatedData = contactFormSchema.safeParse({
      inquiryType: data.inquiryType,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!validatedData.success) {
      // Handle validation errors
      const errors = catchZodErrors(validatedData.error, contactFormSchema);
      return {
        status: false,
        message: `Validation failed: ${errors}`,
      };
    }

    const { email, inquiryType, name, message } = validatedData.data;

    // Send the email
    await sendEmail({
      to: process.env.EMAIL_TO!, // The recipient's email address
      replyTo: email, // Use the email address from the form data for the reply-to field
      subject: `New Contact Us Inquiry - ${inquiryType}`, // Use the inquiry type in the subject
      react: ContactUsEmailTemplate({
        name: name, // Include the sender's name
        email: email, // Include the sender's email
        inquiryType: inquiryType, // Include the inquiry type
        message: message || '', // Include the message, or an empty string if not provided
      }),
      name: name, // Ensure that 'name' is included in the email options
    });

    // If email is sent successfully
    return {
      status: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (err) {
    // Handle unexpected errors
    if (err instanceof z.ZodError) {
      const errors = catchZodErrors(err, contactFormSchema);
      return {
        status: false,
        message: `Validation error: ${errors}`,
      };
    }

    console.error('Unexpected error occurred:', err);
    return {
      status: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
};
