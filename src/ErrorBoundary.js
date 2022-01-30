import { Component } from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends Component {
  state = { haserror: false };
  static getDerivedStateFromError() {
    return { haserror: true };
  }
  render() {
    if (this.state.haserror) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
