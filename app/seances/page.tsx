import { Genre, HallSeanses, Movie } from '@prisma/client';
import { SeanseList, SelectDate } from '../../shared/components/shared';
import { timeToMinutes } from '../../shared/lib';
import { sortedMovies } from '../../@types';
import { Suspense } from 'react';
interface ApiMovie extends Movie {
  genres: Genre[];
  seanses: HallSeanses[];
}

export default async function Seances() {
  try {
    let sortedMovies: sortedMovies[] = [];
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `https://${process.env.VERCEL_URL}` ||
      'http://localhost:3000';
    const res = await fetch(`${baseUrl}${process.env.NEXT_PUBLIC_API_URL}/movies?comparison=lte`);
    if (!res.ok) {
      throw new Error(`Ошибка загрузки данных: ${res.statusText}`);
    }

    const movies: ApiMovie[] = await res.json();
    if (movies.length === 0) {
      return <div>No movies found</div>;
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
        <div className="md:px-10 sm:px-4 px-2 bg-gray-300">
          <Suspense>
            <SelectDate className="md:py-5 py-3" />
          </Suspense>
        </div>
        <Suspense>
          <SeanseList sortedMovies={sortedMovies} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return <div className="text-red-500">Ошибка загрузки фильмов</div>;
  }
}
