import { NextRequest, NextResponse } from 'next/server';

import { revalidatePath } from 'next/cache';

export const POST = async (req: NextRequest) => {
  revalidatePath('/case-studies/[slug]', 'page');
  revalidatePath('/case-studies', 'page');

  revalidatePath('/(blog)/blog/(index)', 'layout');
  revalidatePath('/blog', 'page');
  revalidatePath('/(blog)/blog/[slug]', 'page');
  revalidatePath('/(blog)/blog/category/[slug]', 'page');
  revalidatePath('/(blog)/blog/tag/[slug]', 'page');

  return NextResponse.json({});
};
