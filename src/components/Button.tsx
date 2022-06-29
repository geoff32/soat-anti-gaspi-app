import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = ({className, ...props}) => (
  <button className={`button ${className}`} {...props} />
)

export default Button;