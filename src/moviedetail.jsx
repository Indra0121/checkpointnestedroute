import React from 'react';

const MovieDetails = ({ movie, onNavigateBack }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Movie Trailer"
        allowFullScreen
      ></iframe>
      <button onClick={onNavigateBack}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;
