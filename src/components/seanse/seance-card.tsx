'use client';

import { CardType } from '@/@types/sceance-type';
import { price } from '@/lib/set-film-hall.ts/constants';
import Link from 'next/link';

export default function SeanceCard({ hall, time, title, age, genres, id }: CardType) {
  return (
    <Link href={'/movie/' + id}>
      <div className="flex  pb-3 mt-3 cursor-pointer ">
        <div className={'py-1 w-[70.2px] mr-6'}>
          <p className="text-white py-1  px-3 rounded-lg bg-lime-600 font-black text-lg hover:bg-lime-700">
            {Math.floor(time / 60) + ':' + (time % 60 < 10 ? (time % 60) + '0' : time % 60)}
          </p>
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
          <div className="flex text-xs pt-3 text-gray-500">
            <p>
              {(time >= 1260 && age > 12) ||
              (time >= 1020 && age == 18) ||
              (time >= 1020 && age == 16)
                ? '2D'
                : '3D'}
              {' •'}
            </p>
            <p>
              &nbsp;{price(time)}₽{' •'}
            </p>
            <p> &nbsp;Зал {hall}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
