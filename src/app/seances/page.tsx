import Date from '@/components/date';
import SeanceCard from '@/components/seance-card';
import { fetchData } from '@/lib/fetch-films';
import { SetFilmHall } from '@/lib/set-film-hall.ts';

export default async function Seances() {
  const movie = await SetFilmHall(await fetchData()).seansesArray;
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-300 px-10">
        <Date />
      </div>
      <div className="mx-10">
        {movie.map((item, id) => (
          <div key={id} className={`${id > 0 && 'border-t-[1px]  border-slate-300'}`}>
            <SeanceCard
              time={item.time}
              id={item.id}
              title={item.title}
              age={item.age}
              genres={item.genres}
              hall={item.hall}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
