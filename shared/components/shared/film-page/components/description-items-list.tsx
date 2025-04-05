import React from 'react';
import { cn } from 'shared/lib';

interface Props {
  items: { name: string }[];
  className?: string;
}

export const DescriptionItemsList: React.FC<Props> = ({ items, className }) => {
  return (
    <li className={cn('max-sm:w-full flex flex-row w-1/2', className)}>
      <ul className="sm:flex-col max-sm:space-x-1 flex flex-wrap">
        {items.map((item, id) => (
          <li key={id} className="flex items-center break-words">
            {item.name}
            {id < items.length - 1 && ', '}
          </li>
        ))}
      </ul>
    </li>
  );
};
