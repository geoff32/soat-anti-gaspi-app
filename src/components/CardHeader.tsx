import React from 'react';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => (
  <div className={`card-header ${className}`} {...props}>{children}</div>
)

export default CardHeader;