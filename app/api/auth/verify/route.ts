import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';
import { compare } from 'bcryptjs';
export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code');
    const userId = Number(req.nextUrl.searchParams.get('userId'));
    if (!code || !userId) {
      return NextResponse.redirect(new URL('/?verifiedError', req.url));
    }
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        userId,
      },
    });
    if (!verificationCode) {
      return NextResponse.redirect(new URL('/?verifiedError', req.url));
    }
    const isCodeValid = await compare(code, verificationCode.code);
    if (!isCodeValid) {
      return NextResponse.redirect(new URL('/?verifiedError', req.url));
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        verified: new Date(),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    });

    return NextResponse.redirect(new URL('/?verified', req.url));
  } catch (error) {
    console.error('[verify_get] Server error', error);
    throw error;
  }
}
