import logo from './logo.svg';
import './App.css';
import makeStyleX from '@stylexjs/dev-runtime';
import { create as stylexCreate } from '@stylexjs/stylex';

export const stylex = makeStyleX({
  classNamePrefix: 'x',
  dev: true,
  test: false,
});

const styles = stylexCreate({
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className={styles.button}>Click me</button>
      </header>
    </div>
  );
}

export default App;