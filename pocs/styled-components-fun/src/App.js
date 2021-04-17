import logo from './logo.svg';
import './App.css';
import styled, { css }  from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Styled Components
      </header>
      <main>
        <div>
          <Button>Normal</Button>
          <Button primary>Primary</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
