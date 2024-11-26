import { create } from 'zustand';
import axios from 'axios';
import { key } from '@/store/key';
import { FilmItem } from './types';

export type MovieState = {
  movie: FilmItem[];
  loading: boolean;
};
interface ApiResponse {
  docs: FilmItem[];
}
export const UseMovie = create<MovieState>((set) => ({
  movie: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
      const { data } = await axios.get<ApiResponse>(
        'https://api.kinopoisk.dev/v1.4/movie?type=movie&year=2024&notNullFields=name&genres.name=!музыка&genres.name=!концерт&limit=12&notNullFields=poster.url&notNullFields=ageRating',
        {
          headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json',
          },
        },
      );
      set({
        movie: data.docs,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
