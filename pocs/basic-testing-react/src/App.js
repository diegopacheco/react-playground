import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Basic for Testing
      </header>
      <main>
        <br/>
        <Hello></Hello>
      </main>
    </div>
  );
}

export default App;
