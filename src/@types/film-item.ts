import { CardType } from './sceance-type';

export type FilmItemProps = {
  image: string;
  title: string;
  genres: {
    name: string;
  }[];
  age: number;
  id: number;
  tickets: CardType[];
};
