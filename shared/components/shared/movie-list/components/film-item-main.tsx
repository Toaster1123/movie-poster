import React from 'react';
import { cn } from '../../../../lib';
import Link from 'next/link';

interface Props {
  title: string;
  genres: {
    name: string;
  }[];
  age: number | null;
  id: number;
  isReleased: boolean;
}

export const FilmItemMain: React.FC<Props> = ({ genres, title, age, id, isReleased }) => {
  return (
    <div className={cn(isReleased && 'px-3')}>
      <Link href={'/movies/' + id}>
        <p
          className={cn(
            'py-2 pr-2 hover:text-red-600',
            isReleased ? 'text-2xl font-black' : 'font-medium',
          )}>
          {title}
        </p>
      </Link>
      <div className={cn('flex flex-wrap', isReleased ? 'gap-2' : 'gap-1')}>
        <div
          className={cn(
            'rounded-md py-1 px-2',
            isReleased ? 'bg-gray-200' : 'bg-gray-200/40 text-gray-600 text-sm',
          )}>
          {age}+
        </div>
        {genres.map((item, id) => {
          if (!isReleased && id >= 3) {
            return;
          }
          return (
            <div
              key={id}
              className={cn(
                'py-1 rounded-md',
                isReleased ? 'bg-gray-200 px-3' : 'bg-gray-200/40 text-gray-600 text-sm px-2',
              )}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
