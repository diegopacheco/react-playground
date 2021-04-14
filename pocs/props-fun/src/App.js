import logo from './logo.svg';
import './App.css';
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <div><br/>Hello, {this.props.name}!</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Props
      </header>
      <main>
        <Welcome name="Diego Pacheco" /> 
      </main>
    </div>
  );
}

export default App;
