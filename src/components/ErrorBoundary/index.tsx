import React from "react";

type IError = {
  children: React.ReactNode;
};

type IErrorState = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export class ErrorBoundary extends React.Component<IError, IErrorState> {
  constructor(props: IError) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(
    error: Error | null,
    errorInfo: React.ErrorInfo | null
  ): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
