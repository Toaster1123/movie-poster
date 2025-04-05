import Link from 'next/link';
import React from 'react';
import { cn } from 'shared/lib';

interface Props {
  name: string;
  link: string;
  path: string;
  className?: string;
}

export const LinkItem: React.FC<Props> = ({ name, link, path, className }) => {
  return (
    <Link href={link}>
      <div
        className={cn(
          'max-sm:px-3 max-sm:py-2 text-white text-lg border-b-[4px] border-transparent hover:border-b-lime-500',
          link == path && 'sm:border-b-lime-500 max-sm:bg-lime-700 ',
          className,
        )}>
        {name}
      </div>
    </Link>
  );
};
