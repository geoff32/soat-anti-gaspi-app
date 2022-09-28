import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({label, className, ...props}) => (
  <label className='label'>
    {label}<br/>
    <textarea className={`input ${className}`} {...props} />
  </label>
)

export default Input;