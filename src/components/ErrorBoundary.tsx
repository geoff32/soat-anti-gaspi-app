import React, { ErrorInfo, ReactNode } from 'react';
import { Button, Container } from '.';

class ErrorBoundary extends React.PureComponent<{ children?: ReactNode }, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <h1>Une erreur est survenue.</h1>
          <Button onClick={() => window.location.reload()}>Recharger la page</Button>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;