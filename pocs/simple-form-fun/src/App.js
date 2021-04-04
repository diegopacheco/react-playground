import logo from './logo.svg';
import './App.css';

const Form = () => (
  <form>
    <label>
      Name: <input value="Arthur Dent" size="8" />
    </label>
    <br/>
    <label>
      Answer to life, the universe, and everything: 
      <input type="number" value={42} style={{
        width: "40px",
        textAlign: "center"
        }}  />
    </label>
  </form>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
          <h1>Welcome, Hitchhiker!</h1>
          <Form />
        </main>
    </div>
  );
}

export default App;
