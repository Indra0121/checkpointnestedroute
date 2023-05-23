import React, { useState } from 'react';
import './movielist.css';
import MovieDetails from './moviedetail';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Dragon ball super: super hero',
      description:
        "L'armée du ruban rouge a déjà été détruite par Son Goku...",
      posterURL:
        'https://i5.walmartimages.com/asr/320ffc55-d625-4169-9f2f-8527965f4332.9b965e762b9d60749e2e38769097ea3b.png',
      rating: 10,
      trailerURL: 'https://www.youtube.com/embed/trailerId',
    },
    {
      title: 'Friday the 13th',
      description:
        'Cristal lake where a killer with a hokey mask resides...',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTQ5ODI5NTMzN15BMl5BanBnXkFtZTcwNzY4MTYxMg@@._V1_.jpg',
      rating: 7,
      trailerURL: 'https://www.youtube.com/embed/trailerId',
    },
    {
      title: 'Your name',
      description:
        "Mitsuha, adolescente coincée dans une famille traditionnelle...",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDBlYmY3MzktMTgyOS00MTAwLTlkZDMtMGUzNDIyNTU2NjcyXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
      rating: 7,
      trailerURL: 'https://www.youtube.com/embed/trailerId',
    },
    {
      title: 'Undertale',
      description: `Sit down, child ,Do not quail ,With peace and love, we will prevail...
      `,
      posterURL:
        'https://i.etsystatic.com/14746444/r/il/6ae81c/1812889523/il_570xN.1812889523_o4gv.jpg',
      rating: 7,
      trailerURL: 'https://www.youtube.com/embed/trailerId',
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleFilterTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleFilterRatingChange = (event) => {
    setFilterRating(event.target.value);
  };

  const handleAddMovie = () => {
    const title = prompt('Enter movie title:');
    const description = prompt('Enter movie description:');
    const posterURL = prompt('Enter movie poster URL:');
    const rating = parseFloat(prompt('Enter movie rating:'));
    const trailerURL = prompt('Enter movie trailer URL (YouTube embed link):');
  
    if (title && description && posterURL && rating && trailerURL) {
      const newMovie = {
        title,
        description,
        posterURL,
        rating,
        trailerURL,
      };
  
      setMovies([...movies, newMovie]);
    }
  };
  
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = movie.rating >= filterRating;

    return titleMatch && ratingMatch;
  });

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleNavigateBack = () => {
    setSelectedMovie(null);
  };

  if (selectedMovie) {
    return <MovieDetails movie={selectedMovie} onNavigateBack={handleNavigateBack} />;
  }

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleFilterTitleChange}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={handleFilterRatingChange}
        />
      </div>
      <div className="cards">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card" onClick={() => handleMovieClick(movie)}>
            <img src={movie.posterURL} alt={movie.title} />
            <div className="card-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <span className="rating">{movie.rating}</span>
            </div>
          </div>
        ))}
      <div className="add-movie">
  <button onClick={handleAddMovie}>Add Movie</button>
</div>

      </div>
    </div>
  );
};

export default MovieList;
