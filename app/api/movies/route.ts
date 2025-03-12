import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma-client';

const today = new Date().toISOString().split('T')[0];

export async function GET() {
  const movies = await prisma.movie.findMany({
    where: {
      premierDate: {
        lte: today,
      },
    },
    include: {
      genres: true,
      seanses: true,
    },
  });
  return NextResponse.json(movies);
}
