import React, { Component } from 'react';
import './App.css';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
class MovieDetail extends Component {

    state = {
        movie: {}
    }

    async componentDidMount() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}movie?api_key=cbc6a4fcf31d82d2599fd3177bad7130&language=en-US`)
            const movie = await result.json();
            this.setState({
                movie,
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { movie } = this.state;
        return (
            <div>
                <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
                <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.release_date}</h3>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
        );
    }
}

export default MovieDetail;
