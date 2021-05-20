import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";

const NavBar = () => {
  const auth = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand btn  btn-sm m-0" to="/">
        PFE Platforme 
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
            <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          </React.Fragment>
       
            <React.Fragment>
            {auth.user && auth.user.role=="admin" &&<NavLink className="nav-item nav-link" to="/admin">
            Dashboard
           </NavLink>}
            </React.Fragment>

        

            <React.Fragment>
            {auth.user && auth.user.role !=="admin" &&
            <NavLink className="nav-item nav-link" to={"/profile"}>
             Profile
           </NavLink>}
            </React.Fragment>


            { auth.user &&
           <NavLink className="nav-item nav-link" to="/logout" onClick={()=>auth.logout()}>
            Logout
           </NavLink>
          }
          { !auth.user &&
            <React.Fragment>
            <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          </React.Fragment>
          }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
