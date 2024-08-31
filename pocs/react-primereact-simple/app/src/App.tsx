import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dock } from 'primereact/dock';

function App() {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      label: 'React',
      icon: <img src="/logo192.png" alt="React" style={{ width: '5em', height: '5em' }} />,
      command: () => {
        window.location.href = 'https://reactjs.org/';
      }
    },
    {
      label: 'GitHub',
      icon: <img src="/gh.png" alt="GitHub" style={{ width: '5em', height: '5em' }} />,
      command: () => {
        window.location.href = 'https://github.com/';
      }
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click me" onClick={() => alert("you clicked!")} />
        <br />
        <Button label="Show tip" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog header="TIP" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
          <p className="m-0">
            Let's talk about Reacct Dialog component? Did you know React was created at Meta?
          </p>
        </Dialog>

        <Dock model={items} position="bottom" />
      </header >
    </div >
  );
}

export default App;
