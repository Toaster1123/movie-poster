import { prisma } from '../../../prisma/prisma-client';
import { BtnBack, Description, SelectDate, TicketsGroup } from '../../../shared/components/shared';

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }) {
  const id = Number((await params).id);
  const name = await prisma.movie.findFirst({
    where: {
      id,
    },
    select: {
      name: true,
    },
  });
  return {
    title: name?.name + ' — Кинотеатр «Проекторий»',
  };
}

export default async function Movie({ params }: { params: Promise<{ id: number }> }) {
  const id = Number((await params).id);
  const movieItem = await prisma.movie.findFirst({
    where: {
      id,
    },
    include: {
      persons: true,
      genres: true,
      countries: true,
    },
  });

  const seanses = await prisma.hallSeanses.findMany({
    where: {
      movieId: id,
    },
  });
  if (movieItem === null) {
    return;
  }
  return (
    <div className=" flex-grow h-full">
      <BtnBack />
      <div className="flex px-10">
        <img className="w-[265px] h-[374px] rounded-2xl" src={movieItem.imageUrl} alt="картинка" />
        <div className="ml-10">
          <ul className="h-[26px] flex space-x-2 text-gray-600">
            {movieItem.genres.map((genre, id) => (
              <li key={id}>
                {genre.name}
                {id < movieItem.genres.length - 1 && ','}
              </li>
            ))}
          </ul>
          <div className="h-[44px] flex flex-col justify-center">
            <b className="text-4xl">{movieItem.name}</b>
          </div>
          <div className="bg-gray-300 rounded-3xl">
            <div className="ml-3 mb-5 mt-2">
              <SelectDate />
            </div>
          </div>
          <TicketsGroup seanses={seanses} className="pl-3.5" />
          <Description
            persons={movieItem.persons}
            movieLength={movieItem.movieLength}
            country={movieItem.countries}
            date={movieItem.premierDate}
          />
          <p className="my-6 max-w-[820px]">{movieItem.description}</p>
        </div>
      </div>
    </div>
  );
}
