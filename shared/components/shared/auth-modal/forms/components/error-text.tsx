import React from 'react';
import { cn } from '../../../../../lib';

interface Props {
  text: string;
  className?: string;
}

export const ErrorText: React.FC<Props> = ({ text, className }) => {
  return <p className={cn('text-red-500 text-sm', className)}>{text}</p>;
};
