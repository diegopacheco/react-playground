import React from 'react';
import './App.css';

// Step 1: Create a context
interface ContextValue {
  children: React.ReactNode;
  state: {
    message: string;
  };
  setMessage: (newMessage: string) => void;
}
const MyContext = React.createContext<ContextValue>({ 
  children: null, 
  state: { message: "" },
  setMessage: (newMessage: string) => {}
});

// Step 2: Create a provider component
class MyProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    message: "Hello from context!"
  };
  render() {
    return (
      <MyContext.Provider value={{
        children: this.props.children,
        state: this.state,
        setMessage: (newMessage: string) => this.setState({ message: newMessage })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

// Step 3: Create a consumer component
class MyConsumer extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context: any) => (
          <div>
            <p>{context.state.message}</p>
            <button onClick={() => context.setMessage("Updated message from context!")}>Update Message</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyProvider>
          <div>
            <h1>Using React Context API</h1>
            <MyConsumer />
          </div>
        </MyProvider>
      </header>
    </div>
  );
}

export default App;