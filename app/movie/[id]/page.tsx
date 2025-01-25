import axios from 'axios';

import BtnBack from '@/components/shared/film-page/btn-back';
import Description from '@/components/shared/film-page/description';
import { FilmType } from '@/@types/film-by-id';
import { fetchData } from '@/lib/fetch-films';
import TicketsWrapper from '@/components/shared/tickets-wrapper';
import TicketsPicker from '@/components/shared/tickets-group';
import Date from '@/components/shared/date';

export async function generateMetadata(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const post = await fetchFilmData(params.id);
  return {
    title: post.name + ' — Кинотеатр «Проекторий»',
  };
}

async function fetchFilmData(id: number) {
  const { data } = await axios.get<FilmType>(`https://d1258192d0a72ca0.mokky.dev/filmItem/${id}`);
  return data;
}

export default async function Movie(props: { params: Promise<{ id: number }> }) {
  const allMovie = await fetchData();
  const params = await props.params;
  const movie = await fetchFilmData(params.id);
  return (
    <TicketsWrapper movie={allMovie}>
      <div className=" flex-grow h-full">
        <BtnBack />
        <div className="flex px-10">
          <img className="w-[265px] h-[374px] rounded-2xl" src={movie.poster.url} alt="картинка" />
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
                <Date />
              </div>
            </div>
            <TicketsPicker title={movie.name} />
            <Description
              persons={movie.persons}
              movieLength={movie.movieLength}
              country={movie.countries}
              year={movie.year}
            />
            <p className="my-6 max-w-[820px]">{movie.description}</p>
          </div>
        </div>
      </div>
    </TicketsWrapper>
  );
}
