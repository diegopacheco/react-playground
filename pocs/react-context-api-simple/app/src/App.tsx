import React, { createContext, useState } from 'react';
import './App.css';
import { count } from 'console';

// Step 1: Define Context
const MyContext = createContext<any>(null);

// Create Provider Component
const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState({ counter: 0, message: 'Initial State' });
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Consumer Component for demonstration (could also use useContext hook in functional components)
const MyConsumer: React.FC = () => (
  <MyContext.Consumer>
    {(context: any) => (
      <div>
        <p>{context.state.message}</p>
        <p>{context.state.counter}</p>
        <button onClick={() => {
            context.setState({ message: 'State Updated', counter: context.state.counter + 1 })
        }}>Update State</button>
      </div>
    )}
  </MyContext.Consumer>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyProvider>
          <div>
            <h1>Using React Context API</h1>
            <MyConsumer />
            <MyConsumer />
          </div>
        </MyProvider>
      </header>
    </div>
  );
}

export default App;