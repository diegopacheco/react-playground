import logo from './logo.svg';
import './App.css';
import Table from './Table';
import React, {useState} from 'react';

function App() {

  const movies = [
      {
        tittle: 'Godzilla vs Kong',
        year: '2021',
        cover: 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      },
      {
        tittle: 'The midnight Sky',
        year: '2020',
        cover: 'http://br.web.img2.acsta.net/pictures/20/10/27/16/08/4038955.jpg',
      },
      {
        tittle: 'Star Wars Episode 9',
        year: '2019',
        cover: 'https://multversogeek.com.br/wp-content/uploads/2019/12/riseskywalker01-1170x658.jpg',
      },
      {
        tittle: 'Tomb Raider',
        year: '2018',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/2/20/Tomb_raider_2018_poster.jpg',
      },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Simple Novies <br/> Table
      </header>
      <main>
        <Table movies={movies} />
      </main>
    </div>
  );
}

export default App;