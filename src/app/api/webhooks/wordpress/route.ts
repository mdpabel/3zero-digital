import { NextRequest, NextResponse } from 'next/server';

import { revalidatePath } from 'next/cache';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  if (body && body.post) {
    const url = body.post_permalink;
    const parts = url.split('/');
    const slug = parts[parts.length - 2];

    revalidatePath(`/case-studies/${slug}`);
  }

  revalidatePath('/case-studies/[slug]', 'page');
  revalidatePath('/case-studies', 'page');

  return NextResponse.json({});
};
