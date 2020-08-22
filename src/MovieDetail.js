import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  async componentDidMount() {
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}movie?api_key=cbc6a4fcf31d82d2599fd3177bad7130&language=en-US`);
      const movie = await result.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h3>{movie.release_date}</h3>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
 position: relative;
 padding-top: 50vh;
 background: url(${(props) => props.backdrop}) no-repeat;
 background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 1rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;
