import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './MyStore';

function App() {
  // Initialize state from the store's context
  const [count, setCount] = useState(store.getSnapshot().context.count);
  const [name, setName] = useState(store.getSnapshot().context.name);

  useEffect(() => {
    const subscription = store.subscribe((snapshot) => {
      console.log('Store updated:', snapshot); // Debugging
      setCount(snapshot.context.count);
      setName(snapshot.context.name);
    });

    return () => {
      if (subscription && typeof subscription.unsubscribe === 'function') {
        subscription.unsubscribe();
      } else {
        console.warn('Subscription does not have an unsubscribe method');
      }
    };
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