import React from 'react';
import { cn } from 'shared/lib';

interface Props {
  text: string;
  btnFunc: () => void;
  className?: string;
}

export const ChangeButton: React.FC<Props> = ({ text, btnFunc, className }) => {
  return (
    <div
      onClick={btnFunc}
      className={cn(
        'cursor-pointer border-b border-b-transparent select-none hover:border-b hover:text-blue-500 hover:border-blue-500',
        className,
      )}>
      {text}
    </div>
  );
};
