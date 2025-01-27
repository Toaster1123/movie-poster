import { Country, Person } from '@prisma/client';

interface Props {
  persons: Person[];
  movieLength: number | null;
  country: Country[];
  date: string;
}

export const Description: React.FC<Props> = ({ persons, movieLength, country, date }) => {
  return (
    <div className="bg-gray-300 p-5 min-w-[828px] min-h-[248px] rounded-lg mt-4">
      <ul className="flex mb-4">
        <li className="w-72 text-gray-600">Режисёр:</li>
        <li>
          <ul className="flex">
            {persons.map((item, id) => {
              if (item.profession == 'director') {
                return <li key={id}>{item.name}</li>;
              }
            })}
          </ul>
        </li>
      </ul>
      {persons && (
        <ul className="flex mb-4">
          <li className="w-72 text-gray-600">В ролях:</li>
          <li>
            <ul className="flex  max-w-[500px] flex-wrap">
              {persons.map((item, id) => {
                if (id > 5) {
                  return null;
                }
                if (item.profession == 'actor') {
                  return (
                    <li key={id}>
                      {item.name}
                      {id < 5 && ', '}&nbsp;
                    </li>
                  );
                }
              })}
            </ul>
          </li>
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
          <li>
            <ul>
              {country.map((item, id) => (
                <li key={id}>{item.name}</li>
              ))}
            </ul>
          </li>
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
