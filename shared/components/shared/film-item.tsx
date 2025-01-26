import Link from 'next/link';
import TicketsGroup from './tickets-group';

interface Props {
  image: string;
  title: string;
  genres: {
    name: string;
  }[];
  age: number | null;
  id: number;
}

export const FilmItem = ({ image, title, genres, age, id }: Props) => {
  return (
    <div className=" w-[265px] flex flex-col rounded-lg overflow-hidden">
      <Link href={'/movie/' + id}>
        <div className="h-[374px] overflow-hidden">
          <img className="w-[265px] h-[374px] hover:scale-105" src={image} alt="картинка" />
        </div>
      </Link>
      <div className="bg-white flex-1 flex flex-col justify-between rounded-b-2xl ">
        <div className="px-3">
          <Link href={'/movie/' + id}>
            <p className="text-2xl font-black py-2 pr-2 hover:text-red-600">{title}</p>
          </Link>
          <div className=" flex flex-wrap gap-2">
            <div className="bg-gray-200 rounded-md py-1 px-2">{age}+</div>
            {genres.map((item, id) => {
              return (
                <div key={id} className="bg-gray-200 py-1 px-3 rounded-md ">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <TicketsGroup />
      </div>
    </div>
  );
};
