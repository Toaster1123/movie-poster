'use client';
import React from 'react';
import { dayTwo } from './actual-date';
import { ChangeTicketsData } from '@/store/set-date';
import { now } from './curent-date';
import { ChangeSeanse } from '@/store/tickets';
import { activeDateSelector } from '@/store/active-date-selector';

const dateArray = ['Сегодня', 'Завтра', dayTwo];
export default function Date() {
  const { date, setNewDate } = ChangeTicketsData((state) => state);
  const [mount, setMount] = React.useState(false);
  const [disabledBtn, setDisabledBtn] = React.useState<number | null>(null);
  // const { seansesArray } = ChangeSeanse((state) => state);
  const { active, setActive } = activeDateSelector((state) => state);
  React.useEffect(() => {
    if (!mount) {
      if (date >= 1360) {
        setDisabledBtn(0);
      }
    }
    setMount(true);
  }, []);

  React.useEffect(() => {
    if (active === 0) {
      setNewDate(now.getHours() * 60 + now.getMinutes());
    } else {
      setNewDate(600);
    }
  }, [active]);
  return (
    <div className=" flex py-3">
      {dateArray.map((item, id) => {
        return (
          <button
            disabled={id === active || id === disabledBtn}
            className={` ${
              active === id
                ? 'bg-lime-600 cursor-auto hover:border-transparent text-white'
                : 'bg-white'
            } ${
              id === disabledBtn && 'text-gray-400 hover: hover:border-transparent'
            } border-[1px] border-transparent h-8 cursor-pointer mr-2 text-sm p-1 px-3 hover:border-lime-600 rounded-2xl`}
            key={id}
            onClick={() => setActive(id)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
