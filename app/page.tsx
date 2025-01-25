import { fetchData } from '@/lib/fetch-films';
import { prisma } from '../prisma/prisma-client';
import Date from '../shared/components/shared/date';

export default async function Home() {
  const movie = await prisma.movie.findMany({
    include: {
      persons: true,
      genres: true,
      countries: true,
    },
  });
  console.log(movie);
  return (
    <div className="px-10  bg-slate-800">
      {/* <Date /> */}
      <div className="flex  flex-wrap gap-x-8">
        {movie.map((item, id) => {
          if (!item) {
            return null;
          }
          return (
            <div key={id} className="w-[265px]  mb-11 rounded-lg overflow-hidden bg-white">
              {/* <FilmItem
                  id={item.id}
                  image={item.poster.url}
                  title={item.name}
                  genres={item.genres}
                  age={item.ageRating}
                /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
