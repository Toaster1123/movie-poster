import { prisma } from '../../prisma/prisma-client';
import { SeanceCard, SelectDate } from '../../shared/components/shared';
import { convertTimeToSort } from '../../shared/lib';

interface Movie {
  id: number;
  name: string;
  time: number;
  age: number;
  price: number;
  hall: number;
  genres: { name: string }[];
}

export default async function Seances() {
  let sortedMovies: Movie[] = [];
  const today = new Date().toISOString().split('T')[0];

  const movies = await prisma.movie.findMany({
    where: {
      premierDate: {
        lte: today,
      },
    },
    include: {
      seanses: true,
      genres: true,
    },
  });

  movies.forEach((movie) => {
    movie.seanses.forEach((seanse) => {
      sortedMovies.push({
        id: movie.id,
        name: movie.name,
        time: seanse.time,
        age: movie.ageRating,
        price: seanse.price,
        hall: seanse.hallSchemaId,
        genres: movie.genres,
      });
    });
  });
  sortedMovies = sortedMovies
    .sort((a, b) => a.time - b.time)
    .filter(
      (item) => item.time >= convertTimeToSort(new Date().getHours(), new Date().getMinutes()),
    );

  return (
    <div className="bg-gray-100 flex-grow flex flex-col">
      <div className="bg-gray-300 px-10">
        <SelectDate />
      </div>
      <div className="mx-10 flex-grow flex flex-col justify-center">
        {sortedMovies.length === 0 ? (
          <div className="my-5   text-white w-full flex flex-col justify-center items-center">
            <img src="https://plazakino.ru/img/no-seanses.svg" height={168} width={168} />
            <strong className="text-black text-xl my-3">Сеансов на сегодня нет</strong>
            <div
              // onClick={() => {
              //   setNewDate(600);
              //   setActive(1);
              // }}
              className="cursor-pointer mb-5 w-fit   bg-lime-600 py-1 px-3  rounded-xl hover:bg-lime-700">
              Сеансы на завтра
            </div>
          </div>
        ) : (
          sortedMovies.map((item, id) => (
            <div key={id} className={`${id > 0 && 'border-t-[1px]  border-slate-300'}`}>
              <SeanceCard
                time={item.time}
                id={item.id}
                title={item.name}
                age={item.age}
                genres={item.genres}
                hall={item.hall}
                price={item.price}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
