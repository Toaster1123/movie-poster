import React from 'react';

export const Inputs = ({ enter }) => {
  const [value, setValue] = React.useState('');
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    setValue('');
  }, [enter]);

  return (
    <div>
      {enter && (
        <div className=" my-0 mb-5 mx-20 ">
          <div className="flex justify-start mb-2 pl-3">Имя пользователя</div>
          <div>
            <input
              className="text-[#2b2b2b] border-2 outline-none  border-white duration-200 focus:border-2 focus:border-black w-[260px] p-4 pl-3 rounded-2xl text-base  "
              type="text"
              placeholder="Укажите имя"
              required
            />
          </div>
        </div>
      )}
      <div className=" my-0 mb-5 mx-20 ">
        <div className="flex justify-start mb-2 pl-3">Адрес электронной почты</div>
        <div>
          <input
            required
            className="text-[#2b2b2b] border-2 outline-none  border-white duration-200 focus:border-2 focus:border-black w-[260px] p-4 pl-3 rounded-2xl text-base  "
            type="email"
            placeholder="Введиете адрес эл. почты"
          />
        </div>
      </div>
      <div className="my-0 mx-20">
        <div className="flex justify-start mb-2 pl-3">Пароль</div>
        <div>
          <input
            required
            type="password"
            className="text-[#2b2b2b] border-2 outline-none  border-white duration-200 focus:border-2 focus:border-black w-[260px] p-4 pl-3 rounded-2xl text-base  "
            onChange={(event) => handleValue(event)}
            value={value}
            placeholder={enter ? 'Создайте пароль' : 'Пароль'}
          />
        </div>
      </div>
    </div>
  );
};
