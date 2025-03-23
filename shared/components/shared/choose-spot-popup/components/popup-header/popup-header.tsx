import React from 'react';
import { dayToDate } from '../../../../../lib';
import { X } from 'lucide-react';

interface Props {
  weekDay: string;
  title: string;
  onClose: () => void;
}

export const PopupHeader: React.FC<Props> = ({ weekDay, onClose, title }) => {
  return (
    <div className="flex items-center relative w-full">
      <div className=" flex-grow  flex-shrink-0">
        <div>{title}</div>
        <div className="text-gray-600 text-sm">{dayToDate(weekDay)}, Кинотеатр Проекторий</div>
      </div>
      <div
        onClick={() => {
          onClose();
        }}
        className="cursor-pointer absolute right-0 p-3 ">
        <X size={23} strokeWidth={2.5} />
      </div>
    </div>
  );
};
