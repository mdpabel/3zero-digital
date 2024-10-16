import prisma from '@/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const clerkUserId = body.clerkUserId;

  try {
    const res = await prisma.user.create({
      data: {
        clerkUserId: clerkUserId as string,
      },
    });
    console.log({ res });
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
    });
  }
};
