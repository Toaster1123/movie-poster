'use client';

import { useEffect, useState } from 'react';
import { NumberInput } from './components';

interface Props {
  mail: string;
}

export const ConfirmEmail: React.FC<Props> = ({ mail }) => {
  const correct = false;
  const [inputValue, setInputValue] = useState('');
  const [time, setTime] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <form className="h-[493px] flex flex-col items-center" action="">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-semibold">Введите код с почты</span>
        <span className="text-center pt-1">Отправили на {mail}</span>
      </div>
      <div className="flex flex-col items-center pt-20 gap-3">
        <NumberInput correctValue={correct} setInputValue={setInputValue} />
        {!correct && <span className="text-red-500 ">Неверный код</span>}
        <div className="text-gray-500 font-light">Запросить новый код через: 00:{time}</div>
      </div>
    </form>
  );
};
