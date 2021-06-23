import React, { Component } from 'react';
import { arrayOf, objectOf } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
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
