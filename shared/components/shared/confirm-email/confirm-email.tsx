'use client';

import { useEffect, useState } from 'react';
import { ChangeButton, NumberInput } from './components';
import Image from 'next/image';
import { cn, handlerSubmit } from '../../../lib';
import { createVerificationCode } from '@/actions';
import { useVerificationTimer } from 'shared/hooks';

interface Props {
  mail: string;
  openReg: () => void;
  onClose: () => void;
  openConfirnEmail: boolean;
  userPass: string;
  className?: string;
}

export const ConfirmEmail: React.FC<Props> = ({
  mail,
  openReg,
  onClose,
  openConfirnEmail,
  userPass,
  className,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const { time, handlerSendCode } = useVerificationTimer(
    createVerificationCode,
    mail,
    openConfirnEmail,
  );

  useEffect(() => {
    if (!openConfirnEmail) return;
    if (inputValue.length !== 6) {
      setIsCorrect(true);
      return;
    }

    handlerSubmit({ mail, inputValue, setIsCorrect, onClose, setLoadingSubmit, userPass });
  }, [inputValue, mail]);

  return (
    <form
      className={cn('h-full flex flex-col items-center justify-between pt-16', className)}
      action="">
      <div className="h-24 w-24 border-8 rounded-3xl bg-gray-200 border-white shadow-[0px_5px_9px_0px_rgba(0,0,0,0.40)]">
        <Image width={100} height={100} src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col text-center items-center">
          <span className="max-sm:text-[24px] text-3xl font-semibold">Введите код с почты</span>
          <span className="max-sm:text-sm text-center pt-1">Отправили на {mail}</span>
        </div>
        <div className="flex flex-col items-center  gap-3">
          <NumberInput
            correctValue={isCorrect}
            setInputValue={setInputValue}
            loading={loadingSubmit}
            inputValue={inputValue}
          />
          <div className="h-6">
            {!isCorrect && <span className="text-red-500 ">Неверный код</span>}
          </div>
          {time !== 0 ? (
            <div className="text-gray-500 font-light flex gap-1">
              Запросить новый код через:
              <div className="w-14">00:{time < 10 ? `0${time}` : time}</div>
            </div>
          ) : (
            <ChangeButton btnFunc={handlerSendCode} text="Запросить новый код" />
          )}
        </div>
      </div>
      <ChangeButton btnFunc={() => openReg()} text="Поменять данные" />
    </form>
  );
};
