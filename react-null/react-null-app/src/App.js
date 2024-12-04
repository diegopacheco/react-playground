import React, { useState, useEffect } from 'react';
import { Profiler } from 'react';
import logo from './logo.svg';
import './App.css';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log(`Profiler ID: ${id}`);
  console.log(`Phase: ${phase}`);
  console.log(`Actual Duration: ${actualDuration.toFixed(2)} ms`);
  console.log(`Base Duration: ${baseDuration.toFixed(2)} ms`);
  console.log(`Start Time: ${startTime.toFixed(2)} ms`);
  console.log(`Commit Time: ${commitTime.toFixed(2)} ms`);
  console.log('Interactions:', interactions);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          return null
        </p>
      </header>
      <Profiler id="Parent" onRender={onRenderCallback}>
        <Parent />
      </Profiler>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Child rendered');
  });

  if (count === 0) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;