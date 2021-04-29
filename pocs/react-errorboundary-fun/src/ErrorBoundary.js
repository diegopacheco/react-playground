import React from 'react';

function logErrorToMyService(error, errorInfo){
    console.log("Error: " + error);
    console.log("ErrorInfo: " + errorInfo);
}

class ErrorBoundary extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // update state to render somethign different next
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // register error
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Render alternative UI
        return <h1>Oops something went wrong. Division by ZERO!</h1>;
      }
        return this.props.children; 
    }
}
export default ErrorBoundary;