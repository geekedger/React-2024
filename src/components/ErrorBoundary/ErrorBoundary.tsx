import React, { Component, ErrorInfo, ReactNode } from 'react';
interface State {
  hasError: boolean;
}
interface Props {
  children: ReactNode;
  fallback: React.ReactElement<{ onRetry: () => void }>;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }
  handleRetry = () => {
    this.setState({ hasError: false });
  };
  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return React.cloneElement(fallback, { onRetry: this.handleRetry });
    }
    return children;
  }
}
export default ErrorBoundary;
