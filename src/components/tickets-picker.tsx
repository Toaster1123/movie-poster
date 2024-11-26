const objHall = [
  ['10:35', '14:15', '16:00', '17:45', '19:35', '21:25', '23:20'],
  ['10:20', '12:25', '14:50', '17:05', '19:20', '21:35', '23:50'],
  ['10:55', '12:10', '15:30', '18:15', '20:40'],
  ['10:45', '13:00', '16:20', '19:05', '21:30', '23:45'],
  ['10:15', '12:20', '15:45', '17:05', '20:10', '23:10'],
];
const chooseHall = (age: number) => {
  switch (age) {
    case 6:
      return 1;

    case 12:
      return 2;

    case 16:
      return 3;

    case 18:
      return 4;

    default:
      return 0;
  }
};
const price = (time: string) => {
  const timeNum = Number(time.substring(0, 2));
  if (timeNum <= 13) {
    return 350;
  }
  if (timeNum <= 18) {
    return 400;
  }
  return 450;
};
export default function TicketsPicker({ age }: { age: number }) {
  const hall = chooseHall(age);
  return (
    <div className="flex flex-wrap ">
      {objHall[hall].map((item, id) => {
        return (
          <div key={id} className="py-3 w-fit mr-3">
            <p className="text-white py-1 px-3 bg-lime-600 font-black text-lg hover:bg-lime-700">
              {item}
            </p>
            <div className="flex text-sm justify-around border-[1px] border-lime-600">
              <p>
                {(item.includes('21') && age > 12) ||
                (item == '17' && age == 18) ||
                (item == '17' && age == 16)
                  ? '3D'
                  : '2D'}
              </p>
              <p>{price(item)}₽</p>
            </div>
            <p className="text-center pt-1 mb-2">Зал {hall + 1}</p>
          </div>
        );
      })}
    </div>
  );
}
