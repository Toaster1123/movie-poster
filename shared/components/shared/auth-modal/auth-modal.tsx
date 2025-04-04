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
    <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-black/75">
      <div ref={clickRef} className="absolute bg-gray-200 w-[450px] py-7 rounded-xl">
        <X
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer h-6 w-6 text-center z-50"
        />
        {type == 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterComponent onClose={handleClose} />
        )}
        <div className="flex items-center px-10 flex-col">
          <div>
            <span>
              {type == 'login'
                ? 'Если вы ещё не зарегестрированы на сайте, то '
                : 'Если вы уже зарегистрированы, то '}
            </span>
            <span onClick={onSwitchType} className="text-blue-500 cursor-pointer hover:underline ">
              {type == 'login' ? 'зарегистрируйтесь' : 'войдите'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
