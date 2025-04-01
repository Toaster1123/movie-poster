'use client';
import { authModalState, changeUserTickets } from '../../../../../store';
import React from 'react';
import { TicketItem } from './ticket-item';
import { SelectedSeatType } from '../../../../../../@types';
import { useSession } from 'next-auth/react';
import { createOrder } from '../../../../../../app/actions';
import { TSeanses } from '../../../movie-list/components/film-item';
import toast from 'react-hot-toast';
import { Button } from '../../../../ui';

interface Props {
  itemData: TSeanses;
  age: number | null;
  weekDay: string;
  onClose: () => void;
}

export const DrawTickets = ({ itemData, age, weekDay, onClose }: Props) => {
  const setOpenModal = authModalState((state) => state.setOpenModal);
  const [loading, setLoading] = React.useState(false);
  const [prevSeats, setPrevSeats] = React.useState<SelectedSeatType[]>([]);
  const { selectedSeat } = changeUserTickets((state) => state);
  const [deleteIndex, setDeleteIndex] = React.useState(-1);
  const { data: session, status } = useSession();

  const totalAmount = itemData.price * selectedSeat.length;
  const handleClick = async () => {
    if (status === 'authenticated') {
      try {
        setLoading(true);
        const items = selectedSeat.map((item) => ({
          row: item.row,
          col: item.col,
          time: itemData.time,
          price: itemData.price,
          hall: itemData.hallSchemaId,
          age,
        }));
        const data = {
          email: session.user.email,
          totalAmount: totalAmount,
          movieId: itemData.movieId,
          items,
        };
        const url = await createOrder(data);
        toast.success('Заказ успешно создан. Переход на оплату...');
        setLoading(false);

        if (url) {
          location.href = url;
        }
      } catch (error) {
        const err = error as Error;
        return toast.error(`${err.message}`, {
          icon: '❌',
        });
      }
    } else {
      onClose();
      setOpenModal(true);
    }
  };
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
              price={itemData.price}
              id={id}
              isDeletingItem={deleteIndex === id && selectedSeat < prevSeats}
            />
          );
        })}
      </div>
      <Button
        loading={loading}
        onClick={handleClick}
        disabled={selectedSeat.length === 0 || loading}
        className={`w-fit text-sm px-5 py-3 my-3 rounded-lg ${
          selectedSeat.length > 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
        }`}>
        {selectedSeat.length === 0 ? 'Места не выбраны' : `Купить за ${totalAmount} ₽`}
      </Button>
    </div>
  );
};
