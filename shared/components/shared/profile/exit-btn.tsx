'use client';
import React from 'react';
import { Button } from '../../ui';
import { signOut } from 'next-auth/react';

interface Props {
  isDisabled: boolean;
}

export const ExitButton: React.FC<Props> = ({ isDisabled }) => {
  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };
  return (
    <Button
      onClick={onClickSignOut}
      variant="secondary"
      disabled={isDisabled}
      className="cursor-pointer hover:text-white hover:bg-black/85"
      type="button">
      Выйти
    </Button>
  );
};
