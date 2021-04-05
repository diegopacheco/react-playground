import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {

  const [state, setState] = useState('idle');

  const onClickHandler = () => {
      setState('loading');
      setTimeout(() => {
          setState('success');
      }, 2000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <br/>
        <ReactiveButton
              buttonState={state}
              onClick={onClickHandler}
              color={'primary'}
              idleText={'Save Progress'}
              loadingText={'Loading'}
              successText={'Success'}
              errorText={'Error'}
              type={'button'}
              className={'class1 class2'}
              style={{ borderRadius: '5px' }}
              outline={false}
              shadow={false}
              rounded={false}
              size={'normal'}
              block={false}
              messageDuration={2000}
              disabled={false}
              buttonRef={null}
              width={null}
              height={null}
              animation={true}
          />
      </main>
    </div>
  );
}

export default App;
