import { ApiResponse } from '@/@types/main-films';
import Date from '@/components/date';
import FilmItem from '@/components/film-item';
import { key } from '@/store/key';
import axios from 'axios';

async function fetchData() {
  const { data } = await axios.get<ApiResponse>(
    'https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&genres.name=!музыка&genres.name=!концерт&notNullFields=poster.url&notNullFields=ageRating',
    {
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      params: {
        type: 'movie',
        year: 2024,
        limit: 12,
        movieLength: '100-400',
      },
    },
  );
  return data.docs;
}

export default async function Home() {
  const movie = await fetchData();

  return (
    <div className="px-10  ">
      <Date />
      <div className="flex flex-wrap ">
        {movie.map((item, id) => {
          if (!item) {
            return null;
          }
          return (
            <div key={id} className="w-[265px] mr-4 mb-11 rounded-lg overflow-hidden bg-white">
              <FilmItem
                id={item.id}
                image={item.poster.url}
                title={item.name}
                genres={item.genres}
                age={item.ageRating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
