import React from 'react';

import { Dialog, DialogContent, DialogTitle } from '../../ui/dialog';
import { LoginForm, RegisterForm } from './forms';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type == 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <VisuallyHidden>
        <DialogTitle />
      </VisuallyHidden>
      <DialogContent className="w-[450px] bg-white p-10">
        {type == 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <div className="flex items-center flex-col">
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
      </DialogContent>
    </Dialog>
  );
};
