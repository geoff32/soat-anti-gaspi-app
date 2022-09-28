import React from 'react';
import { Link as BaseLink, LinkProps as BaseLinkProps } from 'react-router-dom';

import './Link.css';

interface LinkProps extends BaseLinkProps, React.RefAttributes<HTMLAnchorElement> {

}

const Link: React.FC<LinkProps> = ({className, ...props}) => (
  <BaseLink className={`link ${className ?? ""}`} {...props} />
)

export default Link;