import { FilmItemType } from '@/@types/main-films';
import axios from 'axios';

export async function fetchData() {
  const { data } = await axios.get<FilmItemType[]>('https://d1258192d0a72ca0.mokky.dev/filmItem');
  return data;
}
