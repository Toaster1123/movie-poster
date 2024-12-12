'use client';
import React from 'react';
import { dayTwo } from './actual-date';
import { ChangeTicketsData } from '@/store/set-date';
import { now } from './curent-date';
import { activeDateSelector } from '@/store/active-date-selector';
import { ChangeSeanse } from '@/store/tickets';

const dateArray = ['Сегодня', 'Завтра', dayTwo];
export default function Date({ title }: { title: string }) {
  const { seansesArray } = ChangeSeanse((state) => state);

  const { date, setNewDate } = ChangeTicketsData((state) => state);
  const [mount, setMount] = React.useState(false);
  const [disabledBtn, setDisabledBtn] = React.useState<0 | null>(null);
  const { active, setActive } = activeDateSelector((state) => state);
  React.useEffect(() => {
    if (disabledBtn === null) {
      setActive(1);
    }
  }, []);

  React.useEffect(() => {
    if (active === 0) {
      setNewDate(now.getHours() * 60 + now.getMinutes());
      // setNewDate(1400);
    } else {
      setNewDate(600);
    }
    if (
      seansesArray.filter((item) => {
        return item.title === title && item.time >= date;
      }).length > 0
    ) {
    }
    setDisabledBtn(0);
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
              id === disabledBtn && 'bg-lime-200 text-slate-400 hover: hover:border-transparent'
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
