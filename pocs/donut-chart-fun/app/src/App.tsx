import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonutChart from 'react-donut-chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DonutChart
          strokeColor="black"
          emptyColor="gray"
          data={[
            {
              label: 'Give you up',
              value: 25,
            },
            {
              label: '',
              value: 75,
              isEmpty: true,
            },
          ]}
        />;
      </header>
    </div>
  );
}

export default App;
