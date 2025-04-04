'use client';
import React from 'react';
import { User } from '@prisma/client';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { updateUserInfo } from '../../../../app/actions';
import { Button, Title } from '../../ui';
import { FormInput, formUpdateSchema, TFormUpdateValues } from '../auth-modal/forms';
import { getChangedFields } from '../../../lib';
import { ExitButton } from './exit-btn';

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formUpdateSchema),
    defaultValues: {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email,
      password: '',
      confirmPassword: '',
    },
    shouldUnregister: true,
  });

  const onSubmit = async (data: TFormUpdateValues) => {
    try {
      const changedFields = getChangedFields(form.formState.defaultValues, data);
      const isNotChanged = Object.keys(changedFields).length === 0;
      if (isNotChanged) {
        toast.error('Вы не изменили данные!', { icon: '⚠️' });
        return;
      } else {
        await updateUserInfo(data);
        form.resetField('password');
        form.resetField('confirmPassword');
        toast.error('Данные обновлены 📝', {
          icon: '✅',
        });
      }
    } catch (error) {
      const err = error as Error;
      return toast.error(`${err.message}`, {
        icon: '❌',
      });
    }
  };

  return (
    <div>
      <Title text="Личные данные" size="md" className="font-medium text-center" />
      <FormProvider {...form}>
        <form className="flex flex-col gap-3 w-96 mt-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput name="email" label="E-Mail" required={false} />
          <div className="flex gap-4">
            <FormInput name="firstName" label="Ваше имя" required={false} />
            <FormInput name="lastName" label="Ваша фамилия" required={false} />
          </div>
          <FormInput type="password" name="password" label="Новый пароль" required={false} />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Повторите пароль"
            required={false}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-10 text-white cursor-pointer bg-black hover:bg-black/80"
            type="submit">
            Сохранить
          </Button>
          <ExitButton isDisabled={form.formState.isSubmitting} />
        </form>
      </FormProvider>
    </div>
  );
};
