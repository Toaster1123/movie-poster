import Link from 'next/link';
import { PopupHeaderItem } from '../../popup-header-item';

interface Props {
  title: string;
  time: string;
  hall: number;
  age: number;
  genres: { name: string }[];
  id: number;
  price: number;
}

export const SeanceCard: React.FC<Props> = ({ hall, time, title, age, genres, id, price }) => {
  return (
    <Link href={'/movies/' + id}>
      <div className="flex pb-3 mt-3 cursor-pointer ">
        <div className={'py-1 w-[70px] text-center mr-6'}>
          <p className="text-white py-1 rounded-lg bg-lime-600 font-black text-lg">{time}</p>
        </div>
        <div>
          <strong>{title}</strong>
          <div className=" flex flex-wrap text-sm text-gray-700">
            <div className="bg-gray-200 py-1 px-2 mt-1 mr-1 rounded-md ">{age}+</div>
            {genres.map((item, id) => {
              return (
                <div key={id} className="bg-gray-200 py-1 mt-1 px-2 rounded-md mr-1">
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="flex text-xs pt-3 text-gray-500 gap-2">
            <p>2D</p>
            <PopupHeaderItem data={price} title="₽" />
            <PopupHeaderItem data={hall} title=" Зал" />
          </div>
        </div>
      </div>
    </Link>
  );
};
