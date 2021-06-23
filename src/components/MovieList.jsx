import React, { Component } from 'react';
import { array } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movies.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: array.shape,
};

MovieList.defaultProps = ['object'];

export default MovieList;
