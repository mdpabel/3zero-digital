import { NextRequest, NextResponse } from 'next/server';

import { revalidatePath } from 'next/cache';

export const POST = async (req: NextRequest) => {
  revalidatePath('/case-studies/[slug]', 'page');
  revalidatePath('/case-studies', 'page');

  return NextResponse.json({});
};
