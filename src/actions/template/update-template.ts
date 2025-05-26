'use server';

import prisma from '@/prisma/db';
import slugify from 'slugify';

export async function updateTemplate(_: unknown, formData: FormData) {
  try {
    // Extract data from the FormData object
    const id = formData.get('id') as string | null;
    const name = formData.get('name') as string | null;
    const description = formData.get('description') as string | null;
    const categoryIds = formData.getAll('categoryIds') as string[];
    const price = parseFloat(formData.get('price') as string);
    const salePrice = parseFloat(formData.get('salePrice') as string) || 0;
    const imageUrls = formData.get('imageUrls') as string | null;
    const templateUrl = formData.get('templateUrl') as string;
    const templateLiveUrl = formData.get('templateLiveUrl') as string;

    // Validate required fields
    if (
      !id ||
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

    const slug = slugify(name, {
      lower: true,
      trim: true,
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });

    // Check if all categories exist
    const categories = await prisma.templateCategory.findMany({
      where: {
        id: {
          in: categoryIds,
        },
      },
    });

    // Ensure all provided category IDs are valid
    if (categories.length !== categoryIds.length) {
      return {
        success: false,
        message: 'Some category IDs are invalid.',
      };
    }

    // Update the template in the database
    await prisma.template.update({
      where: { id },
      data: {
        name,
        slug,
        description,
        price,
        salePrice,
        fileUrl: templateUrl,
        liveUrl: templateLiveUrl,
        images: {
          deleteMany: {}, // Remove all existing images before adding new ones
          create: images.map((url) => ({ url })), // Directly store image URLs in the database
        },
        categories: {
          set: categories.map((category) => ({ id: category.id })),
        },
      },
    });

    return { success: true, message: 'Template updated successfully!' };
  } catch (error: any) {
    // Log error for debugging (optional)
    console.error('Error updating template:', error);

    // Return a standardized error response
    return {
      success: false,
      message:
        error.message ||
        'An unexpected error occurred while updating the template',
    };
  }
}
