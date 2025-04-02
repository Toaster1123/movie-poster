import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
  const id = Number(url.pathname.split('/').pop()); 

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
