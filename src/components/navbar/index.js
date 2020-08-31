// libraries
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink activeClassName="is-active" to={"/home"}>
        <i className="fa fa-home" />
      </NavLink>
      <NavLink activeClassName="is-active" to={"/search"}>
        <i className="fa fa-search" />
      </NavLink>
      <span><i className="fa fa-arrow-alt-circle-left" /></span>
    </nav>
  );
};

export default NavBar;
