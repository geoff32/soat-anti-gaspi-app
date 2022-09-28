import React from 'react';

import './Container.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Container: React.FC<ContainerProps> = ({ className, ...props}) => (
  <div className={`container ${className}`} {...props} />
)

export default Container;