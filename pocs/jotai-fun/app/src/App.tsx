import React from 'react';
import './App.css';
import { atom, useAtom } from 'jotai'

const textAtom = atom('hello_atom')
const uppercaseAtom = atom(
  (get) => get(textAtom).toUpperCase()
)

const Input = () => {
  const [text, setText] = useAtom(textAtom)
  const handleChange = (e: any) => setText(e.target.value)
  return (
    <input value={text} onChange={handleChange} />
  )
}

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom)
  return (
    <div>Uppercase: {uppercase}</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input />
        <Uppercase />
      </header>
    </div>
  );
}

export default App;
