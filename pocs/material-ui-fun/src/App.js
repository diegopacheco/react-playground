import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family4=Roboto:300,400,500,700&display=swap" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Material UI
      </header>
      <main>
        <br/>  
        <Button variant="contained" color="primary">Hello Material UI</Button>
      </main>
    </div>
  );
}

export default App;
