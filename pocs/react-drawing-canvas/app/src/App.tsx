import React from 'react';
import './App.css';
import DrawingCanvas from './components/DrawingCanvas';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ border: "solid" }} >
        <DrawingCanvas style={{ border: "1px dotted" }} />
      </header>
    </div>
  );
}

export default App;
