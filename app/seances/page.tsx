import { Genre, HallSeanses, Movie } from '@prisma/client';
import { SeanseList, SelectDate } from '../../shared/components/shared';
import { timeToMinutes } from '../../shared/lib';
import { sortedMovies } from '../../@types';
interface ApiMovie extends Movie {
  genres: Genre[];
  seanses: HallSeanses[];
}

export default async function Seances() {
  let sortedMovies: sortedMovies[] = [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/movies`,
  );
  const movies: ApiMovie[] = await res.json();
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
