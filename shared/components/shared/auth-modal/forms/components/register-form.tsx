import React from 'react';
import { Button, Title } from 'shared/components/ui';
import { FormInput } from './form-input';
import { TFormRegisterValues } from '../schema';
import { authSubmit } from 'shared/lib';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      confirmPassword: string;
    },
    {
      email: string;
      password: string;
      confirmPassword: string;
    }
  >;
  setOpenConfirnEmail: (value: React.SetStateAction<boolean>) => void;
}

export const RegisterForm: React.FC<Props> = ({ form, setOpenConfirnEmail }) => {
  const onSubmit = async (data: TFormRegisterValues) => {
    authSubmit(data, () => setOpenConfirnEmail(true));
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center">
        <div className="mr-2">
          <Title text="Регистрация" size="md" className="font-bold" />
          <p className="text-gray-400">Чтобы купить билет необходимо зарегистрироваться</p>
        </div>
      </div>
      <FormInput name="email" label="E-Mail" required />
      <FormInput name="password" label="Пароль" type="password" required />
      <FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required />

      <Button
        loading={form.formState.isSubmitting}
        type="submit"
        className="h-12 text-base rounded-xl bg-black text-white cursor-pointer hover:bg-black/90 mb-6">
        Зарегистрироваться
      </Button>
    </form>
  );
};
