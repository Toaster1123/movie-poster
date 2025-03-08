import { prisma } from '../prisma/prisma-client';
import { FilmItem, SelectDate } from '../shared/components/shared';

export default async function Home() {
  const today = new Date().toISOString().split('T')[0];

  const movie = await prisma.movie.findMany({
    where: {
      premierDate: {
        lte: today,
      },
    },
    include: {
      genres: true,
      seanses: true,
    },
  });

  return (
    <div className="px-6 bg-slate-800">
      <SelectDate className="ml-[13px] " />
      <div className="flex flex-wrap h-full gap-8 justify-center mb-10">
        {movie.map((item, id) => {
          return (
            <FilmItem
              key={id}
              id={item.id}
              image={item.imageUrl}
              title={item.name}
              genres={item.genres}
              age={item.ageRating}
              seanses={item.seanses}
            />
          );
        })}
      </div>
    </div>
  );
}
