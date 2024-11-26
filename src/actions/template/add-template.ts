'use server';

import cloudinary, { uploadToCloudinary } from '@/lib/cloudinary';
import prisma from '@/prisma/db';

export async function addTemplate(_: unknown, formData: FormData) {
  try {
    // Extract data from the FormData object
    const name = formData.get('name') as string | null;
    const description = formData.get('description') as string | null;
    const categoryId = formData.get('categoryId') as string | null;
    const price = parseFloat(formData.get('price') as string);
    const salePrice = parseFloat(formData.get('salePrice') as string) || 0;
    const images = formData.getAll('images') as File[];
    const templateUrl = formData.get('templateUrl') as string;

    // Validate required fields
    if (!name || !description || !categoryId || isNaN(price) || !templateUrl) {
      return { success: false, message: 'Missing or invalid required fields' };
    }

    // Upload all images
    const uploadedImages = await Promise.all(
      images.map((image) => uploadToCloudinary(image)),
    );

    // Save the template in the database
    await prisma.template.create({
      data: {
        name,
        description,
        price,
        salePrice,
        fileUrl: templateUrl,
        images: {
          create: uploadedImages as { url: string }[], // Nested create for images
        },
        categoryId: categoryId,
      },
    });

    return { success: true, message: 'Template added successfully!' };
  } catch (error: any) {
    // Log error for debugging (optional)
    console.error('Error adding template:', error);

    // Return a standardized error response
    return {
      success: false,
      message:
        error.message ||
        'An unexpected error occurred while adding the template',
    };
  }
}
