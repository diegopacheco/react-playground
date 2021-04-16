import logo from './logo.svg';
import './App.css';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';
import Page from './Page';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Context Api
        </header>
        <main>
        <ThemeContext.Provider value={this.state.theme}>
            <Page>
              <Toolbar changeTheme={this.toggleTheme} />
              <div>
                <ThemedButton />
              </div>
            </Page>
         </ThemeContext.Provider>         
        </main>
      </div>
    ); 
  }
}

export default App;
