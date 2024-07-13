import React, { Suspense, useEffect } from 'react';
import './App.css';

function SlowComponent() {
  useEffect(() => {
    const start = Date.now();
    while (Date.now() - start < 5000) {}
  }, []);
  return <p>Took 5 seconds to render. Done!</p>;
}

const LazySlowComponent = React.lazy(() => Promise.resolve({ default: SlowComponent }));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<p className="blinking-text">Loading...</p>}>
      <LazySlowComponent/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
