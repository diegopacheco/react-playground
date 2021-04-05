import logo from './logo.svg';
import './App.css';
import { counter, increment, reset } from './Counter.js'

const CounterView = () => {
  const count = counter.use()
  // --OR-->  const count = useEntity(counter)
  return (
    <>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div>{count}</div>
        <button onClick={() => increment(1)}> + </button> 
        <button onClick={reset}> Reset </button>
      </main>
      </div>
    </>
  )
}

export default CounterView;
