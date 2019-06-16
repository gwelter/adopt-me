import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hashError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hashError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hashError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true
          }),
        5000
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hashError) {
      return (
        <h1>
          There was an error with this listing.{" "}
          <Link to="/">
            Click here to go back to the homepage or wait 5 seconds
          </Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
