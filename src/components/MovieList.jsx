import React, { Component } from 'react';
import { arrayOf, objectOf } from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: arrayOf(objectOf),
};

MovieList.defaultProps = ['object'];

export default MovieList;
