import logo from './logo.svg';
import './App.css';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function handleClick(){
  console.log('this is:', this);
}

function App(){

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);

  return(
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <button {...buttonProps}>Example</button>
          <div className={isOpen ? 'visible' : ''} role='menu'>
            <FontAwesomeIcon icon={faHome} />
            <a {...itemProps[0]} href='https://example.com'>Regular link</a>
            <br/>
            <a {...itemProps[1]} onClick={handleClick}>With click handler</a>
          </div>
        </main>
      </div>
    </>
  );  
}

export default App;
