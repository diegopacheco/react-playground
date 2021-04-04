import logo from './logo.svg';
import './App.css';
import Calculator from "./Calculator.js";
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Calculator App</p>
        </header>
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
