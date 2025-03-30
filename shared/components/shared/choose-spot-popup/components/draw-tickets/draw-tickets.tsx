'use client';
import { changeUserTickets } from '../../../../../store';
import React from 'react';
import { TicketItem } from './ticket-item';
import { SelectedSeatType } from '../../../../../../@types';

export const DrawTickets = ({ price }: { price: number }) => {
  const [prevSeats, setPrevSeats] = React.useState<SelectedSeatType[]>([]);
  const { selectedSeat } = changeUserTickets((state) => state);
  const [deleteIndex, setDeleteIndex] = React.useState(-1);

  React.useEffect(() => {
    const isSameObject = (a: SelectedSeatType, b: SelectedSeatType) =>
      a.row === b.row && a.colException === b.colException;

    const deletedSeat = prevSeats.findIndex(
      (seat) => !selectedSeat.some((prevSeat) => isSameObject(seat, prevSeat)),
    );
    setDeleteIndex(deletedSeat);
    setTimeout(() => {
      setPrevSeats(selectedSeat);
    }, 300);
  }, [selectedSeat]);

  return (
    <div className="relative flex justify-between mx-7 h-[72px] mt-1">
      <div className="flex items-end">
        {(selectedSeat > prevSeats ? selectedSeat : prevSeats).map((item, id) => {
          return (
            <TicketItem
              key={id}
              row={item.row}
              sit={item.colException}
              price={price}
              id={id}
              isDeletingItem={deleteIndex === id && selectedSeat < prevSeats}
            />
          );
        })}
      </div>
      <button
        disabled={selectedSeat.length === 0}
        className={`w-fit text-sm px-5 py-3 my-3 rounded-lg ${
          selectedSeat.length > 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
        }`}>
        {selectedSeat.length === 0
          ? 'Места не выбраны'
          : `Купить за ${price * selectedSeat.length} ₽`}
      </button>
    </div>
  );
};
