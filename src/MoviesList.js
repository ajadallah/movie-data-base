import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class MoviesList extends Component {

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
            <div>
                {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
            </div>
        );
    }
}

export default MoviesList;
