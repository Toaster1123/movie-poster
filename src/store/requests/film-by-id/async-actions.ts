import { create } from 'zustand';
import axios from 'axios';
import { key } from '@/store/key';
import { MovieState, ApiResponse } from './types';

export const UseMovieById = create<MovieState>((set) => ({
  movie: [],
  loading: true,
  fetchItems: async (id) => {
    try {
      set({ loading: true });
      const { data } = await axios.get<ApiResponse>(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
        headers: {
          'X-API-KEY': key,
          'Content-Type': 'application/json',
        },
      });
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
