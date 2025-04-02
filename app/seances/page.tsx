import { Genre, HallSeanses, Movie } from '@prisma/client';
import { SeanseList, SelectDate } from '../../shared/components/shared';
import { timeToMinutes } from '../../shared/lib';
import { sortedMovies } from '../../@types';
import { Suspense } from 'react';
import { NextResponse } from 'next/server';
interface ApiMovie extends Movie {
  genres: Genre[];
  seanses: HallSeanses[];
}

export default async function Seances() {
  let sortedMovies: sortedMovies[] = [];
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    `https://${process.env.VERCEL_URL}` ||
    'http://localhost:3000';
  const res = await fetch(`${baseUrl}${process.env.NEXT_PUBLIC_API_URL}/movies?comparison=lte`);
  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }
  const movies: ApiMovie[] = await res.json();
  if (movies.length === 0) {
    return NextResponse.json({ error: 'No movies found for the given criteria' }, { status: 404 });
  }
  movies.forEach((movie) => {
    movie.seanses.forEach((seanse) => {
      sortedMovies.push({
        id: movie.id,
        name: movie.name,
        time: seanse.time,
        age: movie.ageRating,
        price: seanse.price,
        hall: seanse.hallSchemaId,
        genres: movie.genres,
      });
    });
  });

  sortedMovies = sortedMovies.sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

  return (
    <div className="bg-gray-100 flex-grow flex flex-col">
      <Suspense>
        <div className="bg-gray-300 px-10">
          <SelectDate />
        </div>
        <SeanseList sortedMovies={sortedMovies} />
      </Suspense>
    </div>
  );
}
