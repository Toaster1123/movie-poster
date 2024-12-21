import Link from 'next/link';
import TicketsPicker from './tickets/tickets-picker';
import { FilmItemProps } from '@/@types/film-item';

export default function FilmItem({ image, title, genres, age, id }: FilmItemProps) {
  return (
    <div className="h-full  overflow-hidden">
      <Link href={'/movie/' + id}>
        <div className="h-[374px] overflow-hidden">
          <img className="w-[265px] h-[374px] hover:scale-105" src={image} alt="картинка" />
        </div>
      </Link>
      <div className="bg-white h-2/3  rounded-b-2xl px-3">
        <Link href={'/movie/' + id}>
          <p className="text-2xl font-black py-2 pr-2 hover:text-red-600">{title}</p>
        </Link>
        <div className=" flex flex-wrap">
          <div className="bg-gray-200 py-1 px-2 mt-1 mr-1 rounded-md ">{age}+</div>
          {genres.map((item, id) => {
            return (
              <div key={id} className="bg-gray-200 py-1 mt-1 px-2 rounded-md mr-1">
                {item.name}
              </div>
            );
          })}
        </div>
        <TicketsPicker title={title} />
      </div>
    </div>
  );
}
