export default function Contacts() {
  return (
    <div className="px-10 h-full flex-grow bg-gray-100">
      <div className="my-4">
        <strong className=" text-xl"> Кинотеатр Проекторий </strong>
      </div>
      <div className="h-[240px] w-full bg-gray-300 justify-center items-center flex ">Карта</div>
      <div className="flex justify-between my-8 ">
        <div>
          <strong>Контакты</strong>
          <ul className=" pt-4">
            <li>Админитратор:</li>
            <li className=" pb-3">+7 (903) 636-02-52</li>
          </ul>
          <ul>
            <li>Техподдержка:</li>
            <li className=" pb-3">+7 (903) 636-02-52</li>
          </ul>
          <ul>
            <li>Агент по рекламе:</li>
            <li>+7 (903) 636-02-52</li>
          </ul>
        </div>
        <div>
          <strong className=" mb-6">Адрес</strong>

          <p className=" pt-4">Саргазы</p>
          <p>улица Ленина, 15/1</p>
        </div>
        <div className="mr-20">
          <strong className=" mb-6">Режим работы</strong>

          <p className=" pt-4">кинобар и касса кинотеатра работает </p>
          <p>с 10:00 до начала последнего сеанса</p>
        </div>
      </div>
    </div>
  );
}
