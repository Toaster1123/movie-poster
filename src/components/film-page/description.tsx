import { FilmProps } from '@/@types/film-descripton';

export default function Description({ persons, movieLength, country, year }: FilmProps) {
  return (
    <div className="bg-gray-300 p-5 min-w-[828px] min-h-[248px] rounded-lg mt-4">
      <ul className="flex mb-4">
        <li className="w-72 text-gray-600">Режисёр:</li>
        <li>
          <ul className="flex">
            {persons.map((item, id) => {
              if (item.enProfession == 'director') {
                return <li key={id}>{item.name}</li>;
              }
            })}
          </ul>
        </li>
      </ul>
      <ul className="flex mb-4">
        <li className="w-72 text-gray-600">В ролях:</li>
        <li>
          <ul className="flex  max-w-[500px] flex-wrap">
            {persons.map((item, id) => {
              if (id > 5) {
                return null;
              }
              if (item.enProfession == 'actor') {
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
      <ul className="flex mb-4">
        <li className="w-72 text-gray-600">Хронометраж:</li>
        <li>{movieLength} мин.</li>
      </ul>
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
      <ul className="flex ">
        <li className="w-72 text-gray-600">Год</li>
        <li>{year}</li>
      </ul>
    </div>
  );
}
