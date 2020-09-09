import React, { PureComponent } from 'react';
import '../App.css';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Movie from './Movie';

import { getMovies } from './actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    // Hit api if local storage is older than an hour old
    if (!isLoaded || ((new Date()) - new Date(moviesLoadedAt)) > oneHour) { getMovies(); }
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading...</h1>;
    return (
      <MovieGrid>
        {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  moviesLoadedAt: PropTypes.number.isRequired,
};

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
    `;
