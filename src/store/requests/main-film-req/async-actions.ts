import { create } from 'zustand';
import axios from 'axios';
import { key } from '@/store/key';
import { MovieState, ApiResponse } from './types';

export const UseMovie = create<MovieState>((set) => ({
  movie: [],
  loading: true,
  fetchItems: async () => {
    try {
      set({ loading: true });
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
