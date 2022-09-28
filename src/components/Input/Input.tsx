import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({label, className, ...props}) => (
  <label className='label'>
    {label}<br/>
    <input className={`input ${className}`} {...props} />
  </label>
)

export default Input;