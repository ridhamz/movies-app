import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand btn  btn-sm m-0" to="/">
        MoviesApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
       
            <React.Fragment>
            <NavLink className="nav-item nav-link" to="/movies">
            Movies
           </NavLink>
            </React.Fragment>
            { user &&
           <NavLink className="nav-item nav-link" to="/logout">
            Logout
           </NavLink>
          }
          { !user &&
            <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
          </React.Fragment>
          }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
