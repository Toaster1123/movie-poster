import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number((await params).id);
  const hall = await prisma.hallSchema.findFirst({
    where: {
      id,
    },
    include: {
      exceptions: true,
      occupied: true,
    },
  });
  return NextResponse.json(hall);
}
