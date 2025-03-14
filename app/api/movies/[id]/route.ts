import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number((await params).id);
  const movie = await prisma.movie.findFirst({
    where: {
      id,
    },
    include: {
      persons: true,
      genres: true,
      countries: true,
      seanses: true,
    },
  });

  return NextResponse.json(movie);
}
