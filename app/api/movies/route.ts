import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma-client';

const today = new Date().toISOString().split('T')[0];

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const comparison = url.searchParams.get('comparison');
  if (comparison && !['gte', 'lte'].includes(comparison)) {
    return NextResponse.json(
      { error: 'Недопустимый параметр comparison. Используйте "gte" или "lte".' },
      { status: 400 },
    );
  }
  const whereCondition: {
    premierDate?: {
      gte?: string;
      lte?: string;
    };
  } = {};
  if (comparison === 'gte') {
    whereCondition.premierDate = { gte: today };
  } else {
    whereCondition.premierDate = { lte: today };
  }

  const movies = await prisma.movie.findMany({
    where: whereCondition,
    include: {
      genres: true,
      seanses: true,
    },
  });
  return NextResponse.json(movies);
}
