'use server';

import prisma from '@/prisma/db';
import slugify from 'slugify';

export async function editTemplate(_: any, formData: FormData) {
  try {
    // Extract data from the FormData object
    const name = formData.get('name') as string | null;
    const description = formData.get('description') as string | null;
    const categoryIds = formData.get('categoryIds') as string; // JSON string of category IDs
    const price = parseFloat(formData.get('price') as string);
    const salePrice = parseFloat(formData.get('salePrice') as string) || 0;
    const imageUrls = formData.get('imageUrls') as string | null;
    const templateUrl = formData.get('templateUrl') as string;
    const templateLiveUrl = formData.get('templateLiveUrl') as string;
    const id = formData.get('id') as string;

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

    // Parse category IDs from JSON string
    const categoryIdArray = JSON.parse(categoryIds);

    // Check if all categories exist
    const categories = await prisma.templateCategory.findMany({
      where: {
        id: {
          in: categoryIdArray,
        },
      },
    });

    if (categories.length !== categoryIdArray.length) {
      return { success: false, message: 'Some categories do not exist' };
    }

    // Check if template exists
    const existingTemplate = await prisma.template.findUnique({
      where: { id },
      include: { categories: true },
    });

    if (!existingTemplate) {
      return { success: false, message: 'Template not found' };
    }

    // Update the template
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
        images,
        categories: {
          deleteMany: {}, // Remove all existing category associations
          create: categoryIdArray.map((categoryId: string) => ({
            categoryId,
          })), // Add new category associations
        },
      },
    });

    return { success: true, message: 'Template updated successfully!' };
  } catch (error: any) {
    // Log error for debugging (optional)
    console.error('Error editing template:', error);

    // Return a standardized error response
    return {
      success: false,
      message:
        error.message ||
        'An unexpected error occurred while editing the template',
    };
  }
}
