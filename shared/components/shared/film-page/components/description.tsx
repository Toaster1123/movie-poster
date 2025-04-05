import { Country, Person } from '@prisma/client';
import { DescriptionItem } from './description-item';

interface Props {
  persons: Person[];
  movieLength: number | null;
  country: Country[];
  date: string;
}

export const Description: React.FC<Props> = ({ persons, movieLength, country, date }) => {
  const actors = persons.filter((item) => item.profession == 'actor');
  const directors = persons.filter((item) => item.profession == 'director');
  return (
    <div className="flex-col sm:space-y-4 space-y-3 flex  bg-gray-300 p-5 rounded-lg mt-4 w-full">
      <DescriptionItem title="Режисёр" itemsList={directors} />
      <DescriptionItem title="В ролях" itemsList={actors} />
      <DescriptionItem title="Хронометраж" movieLength={movieLength} />
      <DescriptionItem title="Страна" itemsList={country} />
      <DescriptionItem title="Год" date={date.substring(0, 4)} />
    </div>
  );
};
