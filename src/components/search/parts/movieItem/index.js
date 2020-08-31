import React from "react";

// assets
import noImage from "assets/noimage.png";

// styles
import "./styles.css";

const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <div className="image-container"
      style={{backgroundImage: `url(${movie.show.image ? movie.show.image.medium : noImage}`}} 
    />
    <p><b>{movie.show.name}</b></p>
  </div>
);

export default MovieItem;
