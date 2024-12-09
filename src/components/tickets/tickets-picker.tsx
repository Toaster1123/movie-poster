'use client';
import { chooseHall, objHall, price } from './lib';

export default function TicketsPicker({ age }: { age: number }) {
  const hall = chooseHall(age);
  return (
    <div className="flex flex-wrap gap-3">
      {objHall[hall].length > 0 ? (
        objHall[hall].map((item, id) => (
          <div key={id} className={'py-3 h-[118px] w-[70.2px] '}>
            <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700">
              {Math.floor(item / 60) + ':' + (item % 60 < 10 ? (item % 60) + '0' : item % 60)}
            </p>
            <div className="flex text-sm justify-around border-[1px] border-lime-600">
              <p>
                {(item >= 1260 && age > 12) ||
                (item >= 1020 && age == 18) ||
                (item >= 1020 && age == 16)
                  ? '3D'
                  : '2D'}
              </p>
              <p>{price(item)}₽</p>
            </div>
            <p className="text-center pt-1 mb-2">Зал {hall + 1}</p>
          </div>
        ))
      ) : (
        <div className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
          <p>Сеансы на завтра</p>
        </div>
      )}
    </div>
  );
}
