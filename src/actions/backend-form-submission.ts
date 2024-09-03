'use server';

import { redirect } from 'next/navigation';

export const backendFormSubmission = (formData: FormData) => {
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

  // Handle form data (e.g., send it to an API or save to a database)
  console.log('Form Data:', data);

  // After handling the form, redirect or show a success message
  redirect('/thank-you'); // Replace with your actual thank-you page
};
