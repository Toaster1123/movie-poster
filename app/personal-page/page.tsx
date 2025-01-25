export function generateMetadata() {
  return {
    title: 'Личный кабинет ',
  };
}

export default function PersonalPage() {
  return (
    <div className="flex justify-between mt-16">
      <div className="w-1/2 flex flex-col items-center">
        <div className="text-start text-lg">
          <p className="text-gray-500 text-base">Ваше имя:</p>
          <p>Жук</p>
          <p className="text-gray-500 mt-4 text-base">Ваша почта:</p>
          <p>test@mail.com</p>
          <p className="w-fit mt-4 cursor-pointer hover:text-gray-500">изменить</p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-center mb-4">Ваши просмотры:</div>
        <div className="">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/a/ae/%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2020%29.jpg/640px-%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2020%29.jpg"
              alt=""
              width={180}
            />
            <p>Джони 3 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
