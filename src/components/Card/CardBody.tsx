import React from 'react';

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ className, children, ...props }) => (
  <div className={`card-body ${className}`} {...props}>{children}</div>
)

export default CardBody;