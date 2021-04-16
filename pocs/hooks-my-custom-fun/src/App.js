import logo from './logo.svg';
import './App.css';
import useOrderCountHook from './useOrderCount';
import React from 'react';

function App(){

    const orderHook = useOrderCountHook();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          My Custom React Hook        
        </header>
        <main>
          <div>
            <h1>count:{orderHook.orderCount.count}</h1>
            <button type='button' onClick=
              {orderHook.changeOrderCount}
            >
              Increment
            </button>
          </div>
        </main>
      </div>
    );

}

export default App;
