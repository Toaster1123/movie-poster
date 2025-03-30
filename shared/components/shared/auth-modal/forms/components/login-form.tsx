import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

import { formLoginSchema, TFormLoginValues } from '../schema';
import { Button, Title } from '../../../../ui';
import { FormInput } from './form-input';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (!resp?.ok) {
        throw Error();
      }
      toast.success('Вы успешно вошли в аккаунт');

      onClose();
    } catch (error) {
      toast.error('Не удалось войти в аккаунт');
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />
            <p className="text-gray-400">Чтобы купить билет необходимо зарегестрироваться</p>
          </div>
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Пароль" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
