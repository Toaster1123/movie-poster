import Link from 'next/link';
import { TicketsGroup } from '../../ticket';
import { cn } from '@heroui/theme';
import { stringDateConvert } from '../../../../lib';
import { FilmItemMain } from './film-item-main';

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
        isReleased ? 'w-[265px] rounded-lg ' : 'w-40',
      )}>
      <Link href={'/movies/' + id}>
        <div className={cn('overflow-hidden', !isReleased && 'rounded-2xl')}>
          <img
            className={cn(' hover:scale-105', isReleased ? 'h-[374px]' : ' h-60')}
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
          <TicketsGroup seanses={seanses} title={title} age={age} />
        ) : (
          <div className="text-gray-600 px-1 text-[13px] py-5">
            С {stringDateConvert(premierDate)}
          </div>
        )}
      </div>
    </div>
  );
};
