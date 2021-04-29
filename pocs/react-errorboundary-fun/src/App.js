import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'

function getDivision() {
  try {
      throw new Error("Division By 0");
  } catch(e) {
    throw e;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Error Boundaries
      </header>
      <main>
          <div name="mainDiv">
            { getDivision()}
          </div>        
      </main>
    </div>
  );
}
export default App;
