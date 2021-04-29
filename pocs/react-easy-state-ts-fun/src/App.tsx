import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from './View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        react-easy-state
      </header>
      <main>
        <View />
      </main>
    </div>
  );
}

export default App;
