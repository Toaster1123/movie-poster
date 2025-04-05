import React, { Suspense } from 'react';
import { TicketsGroup } from '../ticket';
import { SelectDate } from '../select-date';
import { Description } from './components/description';
import { Country, Genre, HallSeanses, Movie, Person } from '@prisma/client';
import { MovieList } from '../movie-list';

interface MovieProps extends Movie {
  genres: Genre[];
  persons: Person[];
  countries: Country[];
  seanses: HallSeanses[];
}

export const FilmPage = async ({ id }: { id: number }) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    `https://${process.env.VERCEL_URL}` ||
    'http://localhost:3000';
  const res = await fetch(`${baseUrl}/${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`);
  const movie: MovieProps = await res.json();

  return (
    <>
      <div className="lg:gap-6 md:gap-4 max-sm:flex-col gap-2 flex">
        <img
          className="max-sm:hidden lg:w-[265px] lg:h-[374px] w-52 h-60 mt-2 rounded-2xl"
          src={movie.imageUrl}
          alt="картинка"
        />
        <div className="w-full">
          <div className="max-sm:gap-3 flex">
            <img
              className="sm:hidden w-36 h-full max-lg:rounded-lg mt-1"
              src={movie.imageUrl}
              alt="картинка"
            />
            <div className="">
              <ul className="max-sm:text-sm flex space-x-2 text-gray-600 flex-wrap">
                {movie.genres.map((genre, id) => (
                  <li key={id}>
                    {genre.name}
                    {id < movie.genres.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="flex w-fit flex-col justify-center">
                <b className="lg:text-4xl max-sm:text-lg text-2xl">{movie.name}</b>
              </div>
            </div>
          </div>
          {movie.movieLength && (
            <>
              <div className="max-[350px]:rounded-none bg-gray-300 rounded-3xl">
                <div className="sm:ml-3 mb-5 mt-2">
                  <Suspense fallback={<div>Загрузка...</div>}>
                    <SelectDate className="max-[350px]:m-0 lg:py-5 py-3" />
                  </Suspense>
                </div>
              </div>
              <Suspense fallback={<div>Загрузка...</div>}>
                <TicketsGroup seanses={movie.seanses} age={movie.ageRating} title={movie.name} />
              </Suspense>
            </>
          )}

          <Description
            persons={movie.persons}
            movieLength={movie.movieLength}
            country={movie.countries}
            date={movie.premierDate}
          />
          <div className="my-6 w-full">
            <p className="max-sm:text-lg text-gray-500">Сюжет</p>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
      <div className="lg:mx-10 md:mx-4 mt-10">
        <h1 className="text-3xl mb-6 font-medium">Скоро в кино</h1>
        <MovieList isReleased={false} exception={movie.id} className="max-sm:p-0" />
      </div>
    </>
  );
};
