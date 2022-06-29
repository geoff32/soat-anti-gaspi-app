import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={`card ${className}`} {...props}>{children}</div>
)

export default Card;