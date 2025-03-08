import { prisma } from '../../prisma/prisma-client';
import { SeanseList, SelectDate } from '../../shared/components/shared';
import { timeToMinutes } from '../../shared/lib';
export interface Movie {
  id: number;
  name: string;
  time: string;
  age: number;
  price: number;
  hall: number;
  genres: { name: string }[];
}

export default async function Seances() {
  let sortedMovies: Movie[] = [];
  const today = new Date().toISOString().split('T')[0];

  const movies = await prisma.movie.findMany({
    where: {
      premierDate: {
        lte: today,
      },
    },
    include: {
      seanses: true,
      genres: true,
    },
  });

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
      <div className="bg-gray-300 px-10">
        <SelectDate />
      </div>
      <SeanseList sortedMovies={sortedMovies} />
    </div>
  );
}
