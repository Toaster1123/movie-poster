import React from 'react';
import { FilmItem } from './components';
import { Genre, HallSeanses, Movie } from '@prisma/client';
interface ApiMovie extends Movie {
  genres: Genre[];
  seanses: HallSeanses[];
}
export const MovieList: React.FC = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/movies`,
  );
  const movies: ApiMovie[] = await res.json();
  return (
    <div className="flex flex-wrap h-full gap-8 justify-center mb-10">
      {movies.map((item, id) => {
        return (
          <FilmItem
            key={id}
            id={item.id}
            image={item.imageUrl}
            title={item.name}
            genres={item.genres}
            age={item.ageRating}
            seanses={item.seanses}
          />
        );
      })}
    </div>
  );
};
