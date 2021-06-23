import { shape, string, number } from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img
          src={ imagePath }
          alt={ `imagem do filme ${title}` }
          className="movie-card-image"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitl">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    storyline: string.isRequired,
    rating: number.isRequired,
    imagePath: string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'not found',
    subtitle: 'not found',
    storyline: 'not found',
    rating: 0,
    imagePath: 'not found',
  },
};

export default MovieCard;
