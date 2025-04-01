import React from 'react';
import { cn, dateOrderCompare } from '../../../../lib';

interface Props {
  index: number;
  date: Date;
}

export const PurchasedDate: React.FC<Props> = ({ index, date }) => {
  return (
    <>
      <h2
        className={cn(
          'text-lg px-4 py-2 bg-black/40 rounded-md text-white mb-2',
          index > 0 && 'mt-10',
        )}>
        {dateOrderCompare(date)}
      </h2>
    </>
  );
};
