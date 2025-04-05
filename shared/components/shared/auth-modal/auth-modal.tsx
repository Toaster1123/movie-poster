'use client';
import React, { useEffect } from 'react';

import { LoginForm, RegisterComponent } from './forms';
import { X } from 'lucide-react';
import { useClickAway } from 'react-use';

interface Props {
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ onClose }) => {
  const clickRef = React.useRef<HTMLDivElement>(null);
  const [type, setType] = React.useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type == 'login' ? 'register' : 'login');
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const handleClose = () => {
    onClose();
  };
  useClickAway(clickRef, () => onClose());
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 px-4">
      <div ref={clickRef} className="relative bg-gray-200 w-full max-w-[450px] rounded-xl py-7">
        <X
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer h-6 w-6 text-center z-50"
        />
        {type == 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterComponent onClose={handleClose} />
        )}
        <div className="flex items-center flex-col pt-4 text-sm text-center">
          <span>
            {type == 'login'
              ? 'Если вы ещё не зарегистрированы, '
              : 'Если вы уже зарегистрированы, '}
            <span onClick={onSwitchType} className="text-blue-500 cursor-pointer hover:underline">
              {type == 'login' ? 'зарегистрируйтесь' : 'войдите'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
