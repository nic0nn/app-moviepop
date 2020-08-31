// libraries
import React from "react";
import { Link } from "react-router-dom";

// assets
import cinema from "assets/cinema.png";

// styles
import "./styles.css";

const Logo = () => (
  <div className="app-logo">
    <Link to="/search">
      <img src={cinema} alt={"popcorn icon"} />
      <h2>MoviePop!</h2>
    </Link>
  </div>
);

export default Logo;
