import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          return null
        </p>
      </header>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Child rendered');
  });

  if (count === 0) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;