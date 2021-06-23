import { shape, string, number } from 'prop-types';
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ `imagem do filme ${title}` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
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
