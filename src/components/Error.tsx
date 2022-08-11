import React from 'react';
import Button from './Button/Button';

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    refresh: () => Promise<void>;
}

const Error: React.FC<ErrorProps> = ({ children, refresh, ...props }) => (
    <div {...props}>
        <p>Une erreur est survenue</p>
        {refresh != null && <Button onClick={() => refresh()}>Réessayer</Button>}
        {children}
    </div>
)

export default Error;