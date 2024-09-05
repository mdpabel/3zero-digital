'use server';

import ShopifySubmissionEmail from '@/components/email/shopify-email-template';
import { sendEmail } from '@/lib/send-email'; // Assuming you have a sendEmail utility
import { catchZodErrors } from '@/lib/utils';
import { shopifyFormSchema } from '@/schema/shopify-form-schema';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const shopifyFormSubmission = async (formData: FormData) => {
  let status = 'success' as 'success' | 'error';
  let errors = '';

  try {
    // Extract form data
    const data = {
      storeType: formData.get('storeType'),
      budget: formData.get('budget'),
      products: formData.get('products'),
      timeline: formData.get('timeline'),
      functionalities: formData.getAll('functionalities'),
      sampleSites: formData.get('sampleSites'),
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate form data with Zod schema
    const validatedData = shopifyFormSchema.parse({
      storeType: data.storeType,
      budget: data.budget,
      products: data.products,
      timeline: data.timeline,
      functionalities: data.functionalities,
      sampleSites: data.sampleSites,
      name: data.name,
      email: data.email,
      message: data.message,
    });

    // Send email to 3Zero Digital
    await sendEmail({
      from: validatedData.email,
      to: process.env.EMAIL_TO!,
      replyTo: validatedData.email,
      subject: 'New Shopify Store Form Submission',
      react: ShopifySubmissionEmail({
        formData: validatedData,
      }),
    });

    // Send confirmation email to the user
    await sendEmail({
      from: process.env.EMAIL_TO!,
      to: validatedData.email,
      replyTo: validatedData.email,
      subject: 'We Received Your Shopify Store Submission',
      react: ShopifySubmissionEmail({
        formData: validatedData,
      }),
    });

    status = 'success';
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors = catchZodErrors(err, shopifyFormSchema);
    }
    status = 'error';
  }

  return redirect(`/form-submission-result?status=${status}&errors=${errors}`);
};
