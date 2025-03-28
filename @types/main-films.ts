export type FilmItemType = {
  id: number;
  name: string;
  poster: {
    url: string;
  };
  alternativeName: string;
  enName: string;
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  status: string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  totalSeriesLength: number;
  seriesLength: number;
  ratingMpaa: string;
  ageRating: number;
  genres: { name: string }[];
  countries: string[];
  top10: number;
  top250: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
};
