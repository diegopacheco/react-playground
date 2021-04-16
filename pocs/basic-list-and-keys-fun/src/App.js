import logo from './logo.svg';
import './App.css';

function TodoList(props) {
  const todos = props.todos;
  const todoItems = todos.map((todo) =>
    <li>{todo}</li>
  );
  return (
    <div>
      <p>TODO Items:</p>
      <ul>{todoItems}</ul>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
)

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Lists and Keys
      </header>
      <main>
        <div>
          Numbers:
          <ul>{listItems}</ul>
         </div>
         <TodoList todos={["Learn React","Learn TS","Rule the Universe"]} />
      </main>
    </div>
  );
}