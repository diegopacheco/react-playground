import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react"
import Carousel from "react-simply-carousel";

class App extends Component{

  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Carousel
            activeSlideIndex={this.state.activeSlideIndex}
            onRequestChange={this.setActiveSlideIndex}
            itemsToShow={5}
            itemsToScroll={3}
          >
            <div>slide 0 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw0.png" /></div>
            <div>slide 1 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw1.png" /></div>
            <div>slide 2 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw2.png" /></div>
            <div>slide 3 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw3.png" /></div>
            <div>slide 4 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw4.png" /></div>
            <div>slide 5 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw5.png" /></div>
            <div>slide 6 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw6.png" /></div>
            <div>slide 7 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw7.png" /></div>
            <div>slide 8 <img style={{ width: 80, height: 80 }} src="starwars-movies/sw8.png" /></div>
          </Carousel>
        </main>
      </div>
    );
  }
  
}

export default App;
