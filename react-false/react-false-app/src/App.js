import React, { useState, useEffect } from 'react';
import './App.css';

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
    return false;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          return false
        </p>
      </header>
      <Parent />
    </div>
  );
}

export default App;
