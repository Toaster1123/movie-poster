import React from 'react';
import { cn } from '../../lib';

interface Props {
  title: string;
  data: number | null;
  className?: string;
}

export const PopupHeaderItem: React.FC<Props> = ({ className, data, title }) => {
  if (!data) return;
  return (
    <>
      <p className={cn('text-[10px]', className)}>•</p>
      <p>
        {data}
        {title}
      </p>
    </>
  );
};
