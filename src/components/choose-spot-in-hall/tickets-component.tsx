import { CircleX } from 'lucide-react';
import React from 'react';

export default function TicketsComponent({ row, sit }: { row: number; sit: number }) {
  const [hover, setHover] = React.useState(false);

  const hoverMouse = (isHover: boolean) => {
    setHover(isHover);
  };
  return (
    <div
      onMouseOver={() => hoverMouse(true)}
      onMouseOut={() => hoverMouse(false)}
      className={`border-[#d4d4d4] border-b-0 bg-white border-[1px] mr-[-10px] rounded-xl rounded-b-none text-[13px] pl-3 pr-2 pt-2  h-16 relative  ${
        hover ? 'h-[117px]' : 'h-16'
      }`}>
      <div className="flex justify-between">
        <p className="pr-2">
          Ряд {row}, Место {sit}
        </p>
        <div
          className={`cursor-pointer duration-200 ease-in-out ${
            hover ? 'visible opacity-100' : 'invisible opacity-0'
          }`}>
          <CircleX size={19} color="white" fill="#9e9e9e" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex text-xs  items-center ">
        <span className="bg-[#64aed9] h-2 w-2 rounded-md mr-1"></span>
        <p>400 ₽</p>
      </div>
    </div>
  );
}
