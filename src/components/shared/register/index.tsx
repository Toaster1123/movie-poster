'use client';
import React from 'react';
import style from './register.module.scss';
import { X } from 'lucide-react';
import { useClickAway } from 'react-use';

import { Inputs } from './input';

import { RegisterPopup } from '@/store/register-opened';
import axios from 'axios';
export const Register = () => {
  const [enter, setEnter] = React.useState(false);
  const { regOpened, setRegOpened } = RegisterPopup((state) => state);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setRegOpened(false);
  });

  const submit = async () => {
    await axios.post('https://d1258192d0a72ca0.mokky.dev/user_data', {});
  };
  return (
    <div className={`${style.overlay} ${regOpened ? style.overlayVisible : ``}`}>
      <div ref={ref} className={style.main}>
        <div
          onClick={() => {
            setRegOpened(false);
          }}
          className=" w-full flex justify-end text-black">
          <X strokeWidth={3} className="cursor-pointer mt-5 mr-5" />
        </div>
        <div className={style.title}>Вход</div>
        <form onSubmit={submit} className="flex h-full flex-col justify-between">
          <Inputs enter={enter} />
          <div className="flex flex-col items-center ">
            <button className="bg-lime-600 text-white px-6 py-3 border-none rounded-2xl mb-5">
              {enter ? 'Продолжить' : 'Войти'}
            </button>
            <div className={style.checkReg}>
              {enter ? 'Уже зарегестрировались?' : 'Ещё не зарегестрировались?'}
              <span onClick={() => setEnter(!enter)}>
                {enter ? ' Войти' : ' Зарегестрироваться'}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
