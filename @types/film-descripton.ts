export type FilmProps = {
  persons: {
    name: String;
    enProfession: String;
  }[];
  movieLength: number;
  country: { name: string }[];
  year: number;
};
