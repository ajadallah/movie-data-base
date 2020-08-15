import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: "The Fellowship of the Ring"
  },
  {
    id: 2,
    title: "The Two Towers"
  },
  {
    id: 3,
    title: "The Return of the King"
  },
  {
    id: 4,
    title: "Iron Man"
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </div>
    );
  }
}

export default App;
