'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formRegisterSchema, TFormRegisterValues } from '../schema';
import { ConfirmEmail } from '../../../confirm-email';
import { cn } from '../../../../../lib';
import { RegisterForm } from './register-form';

interface Props {
  onClose: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterComponent: React.FC<Props> = ({ onClose }) => {
  const [openConfirnEmail, setOpenConfirnEmail] = React.useState(false);
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <FormProvider {...form}>
      <div className="relative overflow-hidden w-[450px] h-auto">
        <div
          className={cn(
            'flex transition-transform duration-500 ease-in-out',
            openConfirnEmail ? '-translate-x-[450px]' : 'translate-x-0',
          )}>
          <div className="w-[450px] px-10 shrink-0">
            <RegisterForm form={form} setOpenConfirnEmail={setOpenConfirnEmail} />
          </div>

          <div className="w-[450px] shrink-0">
            <ConfirmEmail
              mail={form.getValues('email')}
              openReg={() => setOpenConfirnEmail(false)}
              openConfirnEmail={openConfirnEmail}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
