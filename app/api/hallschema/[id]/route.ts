import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = Number(url.pathname.split('/').pop());

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const hall = await prisma.hallSchema.findFirst({
      where: { id },
      include: { exceptions: true, occupied: true },
    });

    if (!hall) {
      return NextResponse.json({ error: 'Hall not found' }, { status: 404 });
    }

    return NextResponse.json(hall);
  } catch (error) {
    console.error('Error fetching hall:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
