'use client';
import { use } from 'react';
import React from 'react';

import Date from '@/components/date';
import TicketsPicker from '@/components/tickets-picker';
import { UseMovieById } from '@/store/requests/film-by-id/async-actions';
import BtnBack from '@/components/film-page/btn-back';
import Description from '@/components/film-page/description';

export default function Movie({ params }: { params: Promise<{ id: number }> }) {
  const { fetchItems, movie, loading } = UseMovieById((state) => state);
  const { id } = use(params);
  React.useEffect(() => {
    fetchItems(id);
  }, []);
  return (
    <div className="bg-gray-200 min-h-[84vh] ">
      <BtnBack />
      <div className="flex px-10">
        <div>
          {loading ? (
            <div className="w-[265px] h-[374px] rounded-2xl bg-gray-300"></div>
          ) : (
            <img
              className="w-[265px] h-[374px] rounded-2xl"
              src={movie.poster.url}
              alt="картинка"
            />
          )}
        </div>
        <div className="ml-10">
          {loading ? (
            <div className="h-[26px] bg-gray-300 w-80"></div>
          ) : (
            <ul className="h-[26px] flex space-x-2 text-gray-600">
              {movie.genres.map((genre, id) => (
                <li key={id}>
                  {genre.name}
                  {id < movie.genres.length - 1 && ','}
                </li>
              ))}
            </ul>
          )}
          <div className="h-[44px] flex flex-col justify-center">
            {loading ? (
              <div className="bg-gray-300 h-[30px] w-52"></div>
            ) : (
              <b className="text-4xl">{movie.name}</b>
            )}
          </div>
          <div className="bg-gray-300 rounded-3xl">
            <div className="ml-3 mb-5 mt-2">
              <Date loading={loading} />
            </div>
          </div>
          <TicketsPicker age={movie.ageRating} loading={loading} />
          <Description
            persons={movie.persons}
            movieLength={movie.movieLength}
            country={movie.countries}
            year={movie.year}
            loading={loading}
          />
          {loading ? (
            <div className="my-6 h-[100px] w-[828px]"></div>
          ) : (
            <p className="my-6 max-w-[820px]">{movie.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
