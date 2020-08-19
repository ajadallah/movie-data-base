import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Movie from './Movie';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cbc6a4fcf31d82d2599fd3177bad7130&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await result.json();
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path='/test' component={Test} />
          {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => (<h1>TEST</h1>);