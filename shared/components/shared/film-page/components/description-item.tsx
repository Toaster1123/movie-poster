import { $Enums } from '@prisma/client';
import React from 'react';
import { cn } from 'shared/lib';
import { DescriptionItemsList } from './description-items-list';

interface Props {
  title: string;
  itemsList?: {
    id: number;
    name: string;
    profession?: $Enums.ProfessionVariants;
  }[];
  movieLength?: number | null;

  date?: string;
  className?: string;
}

export const DescriptionItem: React.FC<Props> = ({
  title,
  itemsList,
  movieLength,
  date,
  className,
}) => {
  if (itemsList || movieLength || date) {
    return (
      <ul className={cn('max-sm:flex-col max-sm:text-sm flex w-full', className)}>
        <li className="w-1/2 text-gray-600">{title}:</li>
        {itemsList ? (
          <DescriptionItemsList items={itemsList} />
        ) : (
          <li className="w-1/2">
            {movieLength || date} {movieLength && 'мин.'}
          </li>
        )}
      </ul>
    );
  }
};
