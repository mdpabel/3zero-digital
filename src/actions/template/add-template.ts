'use server';

import prisma from '@/prisma/db';
import slugify from 'slugify';

export async function addTemplate(_: unknown, formData: FormData) {
  try {
    // Extract data from the FormData object
    const name = formData.get('name') as string | null;
    const description = formData.get('description') as string | null;
    const categoryIds = formData.get('categoryIds') as string;
    const price = parseFloat(formData.get('price') as string);
    const salePrice = parseFloat(formData.get('salePrice') as string) || 0;
    const imageUrls = formData.get('imageUrls') as string | null;
    const templateUrl = formData.get('templateUrl') as string;
    const templateLiveUrl = formData.get('templateLiveUrl') as string;

    // Validate required fields
    if (
      !name ||
      !description ||
      !categoryIds.length ||
      isNaN(price) ||
      !templateUrl
    ) {
      return { success: false, message: 'Missing or invalid required fields' };
    }

    // Parse the image URLs (comma-separated)
    const images = imageUrls
      ? imageUrls.split(',').map((url) => url.trim())
      : [];

    const slug = slugify(name);

    // Check if all categories exist
    const categories = await prisma.templateCategory.findMany({
      where: {
        id: {
          in: JSON.parse(categoryIds),
        },
      },
    });

    // Save the template in the database
    await prisma.template.create({
      data: {
        name,
        slug,
        description,
        price,
        salePrice,
        fileUrl: templateUrl,
        liveUrl: templateLiveUrl,
        images: {
          create: images.map((url) => ({ url })), // Directly store image URLs in the database
        },
        categories: {
          connect: categories.map((category) => ({
            id: category.id, // Connect each category to the template
          })),
        },
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
