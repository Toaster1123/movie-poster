import Link from 'next/link';
import { convertTime } from '../../lib';

interface Props {
  title: string;
  time: number;
  hall: number;
  age: number;
  genres: { name: string }[];
  id: number;
  price: number;
}

export const SeanceCard: React.FC<Props> = ({ hall, time, title, age, genres, id, price }) => {
  return (
    <div className="flex  pb-3 mt-3 cursor-pointer ">
      <div
        // onClick={() => {
        //   setOpened(true);
        //   setCanvasData({
        //     title: title,
        //     time: time,
        //     dimension: selectDimension(time, age),
        //     age: age,
        //     hall: hall,
        //     date: getForwardData(active),
        //     price: price(time),
        //   });
        // }}
        className={'py-1 w-[70.2px] mr-6'}>
        <p className="text-white py-1  px-3 rounded-lg bg-lime-600 font-black text-lg">
          {convertTime(time)}
        </p>
      </div>
      <Link href={'/movie/' + id}>
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
          <div className="flex text-xs pt-3 text-gray-500">
            <p>
              2D
              {' •'}
            </p>
            <p>
              &nbsp;{price}₽{' •'}
            </p>
            <p> &nbsp;Зал {hall}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
