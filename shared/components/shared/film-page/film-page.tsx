import React from 'react';
import { TicketsGroup } from '../ticket';
import { SelectDate } from '../select-date';
import { Description } from './components/description';
import { Country, Genre, HallSeanses, Movie, Person } from '@prisma/client';

interface MovieProps extends Movie {
  genres: Genre[];
  persons: Person[];
  countries: Country[];
  seanses: HallSeanses[];
}

export const FilmPage = async ({ id }: { id: number }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`,
  );
  const movie: MovieProps = await res.json();
  return (
    <div className="flex px-10">
      <img className="w-[265px] h-[374px] rounded-2xl" src={movie.imageUrl} alt="картинка" />
      <div className="ml-10">
        <ul className="h-[26px] flex space-x-2 text-gray-600">
          {movie.genres.map((genre, id) => (
            <li key={id}>
              {genre.name}
              {id < movie.genres.length - 1 && ','}
            </li>
          ))}
        </ul>
        <div className="h-[44px] flex flex-col justify-center">
          <b className="text-4xl">{movie.name}</b>
        </div>
        <div className="bg-gray-300 rounded-3xl">
          <div className="ml-3 mb-5 mt-2">
            <SelectDate />
          </div>
        </div>
        <TicketsGroup seanses={movie.seanses} />
        <Description
          persons={movie.persons}
          movieLength={movie.movieLength}
          country={movie.countries}
          date={movie.premierDate}
        />
        <p className="my-6 max-w-[820px]">{movie.description}</p>
      </div>
    </div>
  );
};
