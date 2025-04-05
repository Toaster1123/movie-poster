import Link from 'next/link';
import { TicketsGroup } from '../../ticket';
import { cn, stringDateConvert } from '../../../../lib';
import { FilmItemMain } from './film-item-main';
import { Suspense } from 'react';

export interface TSeanses {
  id: number;
  time: string;
  price: number;
  hallSchemaId: number;
  movieId: number;
}
interface Props {
  image: string;
  title: string;
  genres: {
    name: string;
  }[];
  age: number | null;
  id: number;
  seanses: TSeanses[];
  premierDate: string;
  isReleased: boolean;
}
export const FilmItem = ({
  image,
  title,
  genres,
  age,
  id,
  seanses,
  premierDate,
  isReleased,
}: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden',
        isReleased ? 'max-sm:w-40 w-[265px] rounded-lg' : 'w-40',
      )}>
      <Link href={'/movies/' + id}>
        <div className={cn('overflow-hidden', !isReleased && 'rounded-2xl')}>
          <img
            className={cn('w-full hover:scale-105', isReleased ? 'max-sm:h-60 h-[374px]' : ' h-60')}
            src={image}
            alt="картинка"
          />
        </div>
      </Link>
      <div
        className={cn(
          'flex-1 flex flex-col justify-between rounded-b-2xl',
          isReleased && 'bg-white ',
        )}>
        <FilmItemMain age={age} genres={genres} title={title} id={id} isReleased={isReleased} />
        {isReleased ? (
          <Suspense fallback={<div>Загрузка...</div>}>
            <TicketsGroup seanses={seanses} title={title} age={age} />
          </Suspense>
        ) : (
          <div className="text-gray-600 px-1 text-[13px] py-5">
            С {stringDateConvert(premierDate)}
          </div>
        )}
      </div>
    </div>
  );
};
