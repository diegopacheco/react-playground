import React from 'react';
import logo from './logo.svg';
import './App.css';
import Msg from './Msg';

function sum(a:number,b:number){
  return a+b;
}

function App() {
  let result = sum(3,3);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        TypeScript: sum(3,3) == {result}
        <Msg></Msg>
      </header>
    </div>
  );
}

export default App;
