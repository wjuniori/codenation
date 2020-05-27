import React from "react";
import { logErrorReportingService } from "../utils";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorReportingService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h4>Invalid data.</h4>;
    }
    return this.props.children;
  }
}
