import React, { useState } from 'react';
import './movielist.css';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Dragon ball super: super hero',
      description:
        "L'armée du ruban rouge a déjà été détruite par Son Goku. Les individus qui perpétuent son esprit ont créé les androïdes ultimes : Gamma 1 et Gamma 2. Cependant, ces deux androïdes s'appellent eux-mêmes des superhéros et commencent à attaquer Piccolo et Gohan. Il est temps pour les vrais héros de se réveiller",
      posterURL:
        'https://i5.walmartimages.com/asr/320ffc55-d625-4169-9f2f-8527965f4332.9b965e762b9d60749e2e38769097ea3b.png',
      rating: 10,
    },
    {
      title: 'Friday the 13th',
      description:
        'Cristal lake where a killer with a hokey mask resides, once you enter in, beware, the only thing that gets out is your coffin',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTQ5ODI5NTMzN15BMl5BanBnXkFtZTcwNzY4MTYxMg@@._V1_.jpg',
      rating: 7,
    },
    {
      title: 'Your name',
      description:
        "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d'imaginer pouvoir vivre l'aventure urbaine dans la peau de... Taki, un jeune lycéen vivant à Tokyo. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDBlYmY3MzktMTgyOS00MTAwLTlkZDMtMGUzNDIyNTU2NjcyXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
      rating: 7,
    },
    {
      title: 'Undertale',
      description:
        `Sit down, child ,Do not quail ,With peace and love, we will prevail ,If you climb, Along this trail You will hear the Undertale Hush now, little ones. I have a story for you. A story about men and monsters..   Long ago, men and beasts      Ruled the earth and had their feasts
        Then one day, came a war
        Blood was spilled as ne'er before
         
        No monster will know love
        No monster belongs in the world above
        Seal them underground
        Let this barrier surround them
         
        The humans, filled with determination, won the war, and sealed the monsters deep beneath Mount Ebott, creating a barrier only a human soul could pass
         
        Many years, many tears
        We live on despite our fears There's no chance we could have won Now we'll never see the sun...`
       ,
      posterURL:
        'https://i.etsystatic.com/14746444/r/il/6ae81c/1812889523/il_570xN.1812889523_o4gv.jpg',
      rating: 7,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

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

    if (title && description && posterURL && rating) {
      const newMovie = {
        title,
        description,
        posterURL,
        rating,
      };

      setMovies([...movies, newMovie]);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = movie.rating.toString().includes(filterRating);

    return titleMatch && ratingMatch;
  });

  return (
    <div>
      <h1>Movie List</h1>

      <div className="filter">
        <input
          type="text"
          placeholder="Filter by Title"
          value={filterTitle}
          onChange={handleFilterTitleChange}
        />

        <input
          type="text"
          placeholder="Filter by Rating"
          value={filterRating}
          onChange={handleFilterRatingChange}
        />
      </div>

      <button onClick={handleAddMovie}>Add Movie</button>

      <div className="cards">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
