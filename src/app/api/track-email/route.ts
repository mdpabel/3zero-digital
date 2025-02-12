import prisma from '@/prisma/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    console.log({ searchParams, id });

    if (!id) {
      return NextResponse.json({
        success: false,
      });
    }

    await prisma.websiteHealthReport.update({
      where: { id: id },
      data: {
        opened: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
};
