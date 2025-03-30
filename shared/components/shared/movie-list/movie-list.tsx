import React from 'react';
import { FilmItem } from './components';
import { Genre, HallSeanses, Movie } from '@prisma/client';
import { cn } from '../../../lib';
interface ApiMovie extends Movie {
  genres: Genre[];
  seanses: HallSeanses[];
}
interface Props {
  isReleased: boolean;
  exception?: number;
  className?: string;
}
export const MovieList: React.FC<Props> = async ({ isReleased, exception, className }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/movies?comparison=${isReleased ? 'lte' : 'gte'}`,
  );
  const movies: ApiMovie[] = await res.json();
  return (
    <div className={cn('flex flex-wrap h-full gap-8 mb-10', className)}>
      {movies.map((item, id) => {
        if (item.id === exception) {
          return;
        }
        return (
          <FilmItem
            key={id}
            id={item.id}
            image={item.imageUrl}
            title={item.name}
            genres={item.genres}
            age={item.ageRating}
            seanses={item.seanses}
            premierDate={item.premierDate}
            isReleased={isReleased}
          />
        );
      })}
    </div>
  );
};
