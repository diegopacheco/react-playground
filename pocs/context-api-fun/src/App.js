import logo from './logo.svg';
import './App.css';
import * as React from 'react'

export function CountDisplay() {
  const {count} = React.useContext(CountContext)
  return <div><p>Count: {count}</p></div>
};


const CountContext = React.createContext()
function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function CountProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}
function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
function CountConsumer({children}) {
  return (
    <CountContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error('CountConsumer must be used within a CountProvider')
        }
        return children(context)
      }}
    </CountContext.Consumer>
  )
}
export {CountProvider, useCount}

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Context Api
        </header>
        <main>
          <CountProvider>
            <CountDisplay />
          </CountProvider>        
        </main>
      </div>
    ); 
  }
}
export default App;
