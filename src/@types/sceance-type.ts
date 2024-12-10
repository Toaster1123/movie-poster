export type CardType = {
  id: number;
  title: string;
  time: number;
  hall: number;
  genres: { name: string }[];
  age: number;
};
export type SetFilmHallType = {
  seansesArray: CardType[];
  tickets: (title: string) => CardType[];
};
