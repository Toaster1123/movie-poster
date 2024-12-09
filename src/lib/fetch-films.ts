import { key } from '@/store/key';
import { ApiResponse } from '@/@types/main-films';
import axios from 'axios';

export async function fetchData() {
  const { data } = await axios.get<ApiResponse>(
    'https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&genres.name=!музыка&genres.name=!концерт&genres.name=!драма&genres.name=!биография&notNullFields=poster.url&notNullFields=ageRating',
    {
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      params: {
        type: 'movie',
        year: 2024,
        limit: 10,
        movieLength: '100-400',
      },
    },
  );
  return data.docs;
}
