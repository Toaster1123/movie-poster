'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formRegisterSchema, TFormRegisterValues } from '../schema';
import { FormInput } from './form-input';
import { Button, Title } from '../../../../ui';
import { registerUser } from '../../../../../../app/actions';
import toast from 'react-hot-toast';

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
      });
      toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
        icon: '✅',
      });
      onClose?.();
    } catch (error) {
      const err = error as Error;
      return toast.error(`${err.message}`, {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Регистрация" size="md" className="font-bold" />
            <p className="text-gray-400">Чтобы купить билет необходимо зарегестрироваться</p>
          </div>
        </div>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Пароль" type="password" required />
        <FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base rounded-xl bg-black text-white cursor-pointer hover:bg-black/90"
          type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
