// libraries
import React from "react";
import { Link } from "react-router-dom";

// components
import MovieItem from "../movieItem";

// styles
import "./styles.css";

const MovieContainer = ({ movies }) => {
  if (movies.length)
    return (
      <div className="movie-container">
        <h2>Peliculas </h2>
        <hr />
        <div className="movie-item-container">
          {movies.map((movie, index) => (
            <Link to={`/detail/${movie.show.id}`} key={index}>
              <MovieItem movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    );

  return null;
};

export default MovieContainer;
