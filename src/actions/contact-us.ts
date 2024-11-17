'use server';

import ContactUsEmailTemplate from '@/components/email/contact-us-email-template'; // Import the correct email template
import { sendEmail } from '@/lib/send-email';
import { catchZodErrors } from '@/lib/utils';
import { contactFormSchema } from '@/schema/contact-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const contactUsSubmission = async (formData: FormData) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract and validate form data
    const data = {
      inquiryType: formData.get('InquiryType'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate form data with Zod schema
    const validatedData = contactFormSchema.parse({
      inquiryType: data.inquiryType,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // Send the email
    await sendEmail({
      to: process.env.EMAIL_TO!, // The recipient's email address
      replyTo: validatedData.email, // Use the email address from the form data for the reply-to field
      subject: `New Contact Us Inquiry - ${validatedData.inquiryType}`, // Use the inquiry type in the subject
      react: ContactUsEmailTemplate({
        name: validatedData.name, // Include the sender's name
        email: validatedData.email, // Include the sender's email
        inquiryType: validatedData.inquiryType, // Include the inquiry type
        message: validatedData.message || '', // Include the message, or an empty string if not provided
      }),
      name: validatedData.name, // Ensure that 'name' is included in the email options
    });

    status = 'success';
  } catch (err) {
    // Handle validation errors
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, contactFormSchema);
    } else {
      // Handle other errors
      errors = 'An unexpected error occurred. Please try again later.';
    }
    status = 'error';
  }

  // Redirect with the status and error message
  return redirect(
    `/form-submission-result?status=${status}&errors=${encodeURIComponent(
      errors,
    )}`,
  );
};
