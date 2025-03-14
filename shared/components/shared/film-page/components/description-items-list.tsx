import React from 'react';

interface Props {
  items: { name: string }[];
  className?: string;
}

export const DescriptionItemsList: React.FC<Props> = ({ items }) => {
  return (
    <li>
      <ul className="flex max-w-[500px] gap-1 flex-wrap">
        {items.map((item, id) => (
          <li key={id}>
            {item.name}
            {id < items.length - 1 && ', '}
          </li>
        ))}
      </ul>
    </li>
  );
};
