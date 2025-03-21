import React from 'react';
import { TSeanses } from '../movie-list/components/film-item';
import { useClickAway } from 'react-use';
import { handleKeyDown } from '../../../lib';
import Canvas from './canvas';
import { PopupHeader, PopupTopData } from './components';
import { HallType } from '../../../../@types';
import DrawTickets from './draw-tickets';

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
    document.addEventListener('keydown', (e) => {
      handleKeyDown(e, onClose);
    });
    return () => {
      document.removeEventListener('keydown', (e) => {
        handleKeyDown(e, onClose);
      });
    };
  }, []);

  useClickAway(ref, () => {
    onClose();
  });
  return (
    <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-black/50">
      <div ref={ref} className="bg-white w-full max-w-[960px]">
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
        <DrawTickets price={itemData.price} />
      </div>
    </div>
  );
};
