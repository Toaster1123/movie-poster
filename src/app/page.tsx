import Date from '@/components/date';
import FilmItem from '@/components/film-item';
import { fetchData } from '@/lib/fetch-films';
import { SetFilmHall } from '@/lib/set-film-hall.ts';

export default async function Home() {
  const movie = await fetchData();
  const { tickets } = SetFilmHall(movie);
  return (
    <div className="px-10  bg-slate-800">
      <Date />
      <div className="flex  flex-wrap gap-x-8">
        {movie.map((item, id) => {
          if (!item) {
            return null;
          }

          return (
            <div key={id} className="w-[265px]  mb-11 rounded-lg overflow-hidden bg-white">
              <FilmItem
                id={item.id}
                image={item.poster.url}
                title={item.name}
                genres={item.genres}
                age={item.ageRating}
                tickets={tickets(item.name)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
