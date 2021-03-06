import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class ErrorBoundary extends Component {
  state = { haserror: false, redirect: false };
  static getDerivedStateFromError() {
    return { haserror: true };
  }
  componentDidCatch(error, info) {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
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
