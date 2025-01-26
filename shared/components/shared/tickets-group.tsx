import React from 'react';

import { Ticket } from './ticket';

export default function TicketsGroup() {
  return (
    <div className="flex py-5  justify-center ">
      <div className="flex w-[235px] flex-wrap gap-3">
        <Ticket price={400} hall={1} />
        <Ticket price={400} hall={1} />
        <Ticket price={400} hall={1} />
        <Ticket price={400} hall={1} />
      </div>
      {/* <div className="cursor-pointer text-white my-5 rounded-xl py-1 px-3 bg-lime-600 hover:bg-lime-700">
        <p
          onClick={() => {
            // setNewDate(600);
            // setActive(1);
          }}>
          Сеансы на завтра
        </p>
      </div> */}
    </div>
  );
}
