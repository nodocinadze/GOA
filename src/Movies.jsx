// ActionMovies.jsx
import React from 'react';

const ActionMovies = () => {
  const movies = [
    { title: 'Mad Max: Fury Road', year: 2015 },
    { title: 'John Wick', year: 2014 },
    { title: 'Die Hard', year: 1988 },
  ];

  return (
    <div>
      <h1>Action Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionMovies;
