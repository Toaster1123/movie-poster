import Image from 'next/image';
export default function Contacts() {
  return (
    <div className="md:px-10 sm:px-6 px-3 h-full flex-grow bg-gray-100">
      <div className="my-4">
        <strong className=" text-xl"> Кинотеатр Проекторий </strong>
      </div>
      <div className="h-[240px] sm:h-[300px] md:h-[400px] w-full bg-gray-300 flex justify-center items-center overflow-hidden">
        <Image
          src="/5E4C8633-4C18-4A37-AFDE-886337350378.png"
          alt="Карта"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-wrap flex justify-between gap-8 my-8">
        <div className="md:w-1/4">
          <p className="max-md:mt-8 md:mb-6 mb-1 font-bold">Контакты</p>
          <ul>
            <li>Администратор:</li>
            <li>+7 (903) 636-02-52</li>
          </ul>
          <ul>
            <li>Техподдержка:</li>
            <li>+7 (903) 636-02-52</li>
          </ul>
          <ul>
            <li>Агент по рекламе:</li>
            <li>+7 (903) 636-02-52</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <p className="max-md:mt-8 md:mb-6 mb-1 font-bold">Адрес</p>
          <p>Саргазы</p>
          <p>улица Ленина, 15/1</p>
        </div>
        <div className="md:w-1/4">
          <p className="max-md:mt-8 md:mb-6 mb-1 font-bold">Режим работы</p>
          <p>Кинобар и касса кинотеатра работает </p>
          <p>с 10:00 до начала последнего сеанса</p>
        </div>
      </div>
    </div>
  );
}
