import { Country, Person } from '@prisma/client';
import { DescriptionItemsList } from './description-items-list';

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
    <div className="bg-gray-300 p-5 min-w-[828px] min-h-[248px] rounded-lg mt-4">
      <ul className="flex mb-4">
        <li className="w-72 text-gray-600">Режисёр:</li>
        <DescriptionItemsList items={directors} />
      </ul>
      {actors.length > 0 && (
        <ul className="flex mb-4">
          <li className="w-72 text-gray-600">В ролях:</li>
          <DescriptionItemsList items={actors} />
        </ul>
      )}
      {movieLength && (
        <ul className="flex mb-4">
          <li className="w-72 text-gray-600">Хронометраж:</li>
          <li>{movieLength} мин.</li>
        </ul>
      )}
      {country && (
        <ul className="flex mb-4">
          <li className="w-72 text-gray-600">Страна:</li>
          <DescriptionItemsList items={country} />
        </ul>
      )}
      {date && (
        <ul className="flex ">
          <li className="w-72 text-gray-600">Год</li>
          <li>{date.substring(0, 4)}</li>
        </ul>
      )}
    </div>
  );
};
