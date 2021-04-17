import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Axios
      </header>
      <main>
          <PersonList />
      </main>
    </div>
  );
}

export default App;
