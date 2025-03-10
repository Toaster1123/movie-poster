export type FilmType = {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  type: string;
  typeNumber: 1;
  year: number;
  description: string;
  shortDescription: string;
  slogan: number;
  status: number;
  rating: number[];
  votes: number[];
  movieLength: number;
  totalSeriesLength: number;
  seriesLength: number;
  ratingMpaa: number;
  ageRating: number;
  poster: {
    url: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  persons: {
    id: number;
    photo: string;
    name: string;
    enName: string;
    description: string;
    profession: string;
    enProfession: string;
  }[];

  premiere: {
    world: string;
    russia: string;
    digital: string;
    cinema: string;
    bluray: string;
    dvd: string;
  };
  top10: string;
  top250: string;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: [];
  createdAt: string;
  updatedAt: string;
};
