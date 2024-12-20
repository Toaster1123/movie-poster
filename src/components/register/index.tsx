'use client';
import React from 'react';
import style from './register.module.scss';
import { X } from 'lucide-react';
import { useClickAway } from 'react-use';

import { Inputs } from './input';

import { RegisterPopup } from '@/store/register-opened';
export const Register = () => {
  const [enter, setEnter] = React.useState(false);
  const { regOpened, setRegOpened } = RegisterPopup((state) => state);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setRegOpened(false);
  });
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
        <Inputs enter={enter} />
        <div className={style.bottom}>
          <button className="bg-lime-600 text-white px-6 py-3 border-none rounded-2xl">
            {enter ? 'Продолжить' : 'Войти'}
          </button>

          <div className={style.checkReg}>
            {enter ? 'Уже зарегестрировались?' : 'Ещё не зарегестрировались?'}
            <span onClick={() => setEnter(!enter)}>
              {enter ? ' Войти' : ' Зарегестрироваться'}{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
