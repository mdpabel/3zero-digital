import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({
    success: true,
  });
};
