import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function CounterUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click here
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React Hooks - useEffect
      </header>
      <main>
        <CounterUseEffect />
      </main>
    </div>
  );
}

export default App;
