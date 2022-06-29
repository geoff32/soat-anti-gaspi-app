import React from 'react';

interface ItemProps {
  value: string | number;
  label: string;
}

interface DropDownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: ItemProps[];
}

const DropDown: React.FC<DropDownProps> = ({items, className, ...props}) => (
  <select className={`dropdown ${className}`} {...props}>
    {items.map((item, index) => (<option key={index} value={item.value}>{item.label}</option>))}
  </select>
)

export default DropDown;