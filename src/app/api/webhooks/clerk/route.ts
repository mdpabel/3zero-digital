import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  console.log(req);

  return NextResponse.json({
    success: true,
  });
};
