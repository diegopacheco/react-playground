import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { Component } from 'react';

function render(){  
  const element = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
            <div>
              <h2>Hello, world!</h2>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        </main>
      </div>
  )
  reactDom.render(element, document.getElementById('root'));  
}
setInterval(render,1000);

class App extends Component {
  render() {
    return (
      <h3>Loading...</h3>
    );
  }
}
export default App;
