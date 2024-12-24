import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './MyStore';

function App() {
  const [count, setCount] = useState(store.getSnapshot().count);
  const [name, setName] = useState(store.getSnapshot().name);

  useEffect(() => {
    const subscription = store.subscribe((ctx) => {
      setCount(ctx.count);
      setName(ctx.name);
    });
    return () => subscription.unsubscribe();
  }, []);

  const increment = () => store.send({ type: 'inc' });
  const addFive = () => store.send({ type: 'add', num: 5 });
  const changeName = () => store.send({ type: 'changeName', newName: 'Alice' });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count: {count}, Name: {name}
        </p>
        <button onClick={increment}>Increment</button>
        <button onClick={addFive}>Add 5</button>
        <button onClick={changeName}>Change Name</button>
      </header>
    </div>
  );
}

export default App;