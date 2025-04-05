'use client';
import React from 'react';
import { TSeanses } from '../movie-list/components/film-item';
import { useClickAway } from 'react-use';
import { handleKeyDown } from '../../../lib';
import { Canvas, DrawTickets, PopupHeader, PopupTopData } from './components';
import { HallType } from '../../../../@types';

interface Props {
  hallData: HallType;
  itemData: TSeanses;
  age: number | null;
  title: string;
  weekDay: string;
  onClose: () => void;
}

export const ChooseSpotPopup: React.FC<Props> = ({
  onClose,
  hallData,
  title,
  age,
  itemData,
  weekDay,
}) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', (e) => {
      handleKeyDown(e, onClose);
    });
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', (e) => {
        handleKeyDown(e, onClose);
      });
    };
  }, []);

  useClickAway(ref, () => {
    onClose();
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-black/75">
      <div ref={ref} className="bg-white w-full mx-10 max-w-[960px]">
        <div className="w-full border-b-2 flex flex-col items-center text-center">
          <PopupHeader onClose={onClose} title={title} weekDay={weekDay} />
          <PopupTopData
            age={age}
            time={itemData.time}
            price={itemData.price}
            hall={itemData.hallSchemaId}
          />
        </div>
        <div className="border-b-2">
          <Canvas hallData={hallData} price={itemData.price} />
        </div>
        <DrawTickets itemData={itemData} age={age} weekDay={weekDay} onClose={onClose} />
      </div>
    </div>
  );
};
