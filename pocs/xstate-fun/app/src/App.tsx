import React from 'react';
import './App.css';
import { createActor, createMachine } from 'xstate';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { toggle: 'Active' },
    },
    Active: {
      on: { toggle: 'Inactive' },
    },
  },
});

const actor = createActor(toggleMachine);
// Subscribe to snapshots (emitted state changes) from the actor
actor.subscribe((snapshot) => {
  console.log('Value:', snapshot.value);
});

// Start the actor
actor.start();

// Send events
actor.send({ type: 'toggle' }); 
actor.send({ type: 'toggle' });

function toggle(e:any){
  e.preventDefault();
  actor.send({ type: 'toggle' }); 
}

type Props = {};
type State = {
  toggleStatus: String
};
class App extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = { toggleStatus: "Active" };
  }

  componentDidMount() {
    actor.subscribe((snapshot) => {
      var newState:String = snapshot.value.toString();
      this.setState({ toggleStatus: newState });
    });
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <form onSubmit={toggle}>
            <button className="btn btn-dark buttons" type="submit">
              Toggle
            </button>
          </form>
          <h3>Toggle State Status: { this.state.toggleStatus } </h3>
        </header>
      </div>
    );
  }
}

export default App;
