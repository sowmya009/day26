import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* navigation link */}
              <NavLink className="nav-link" exact to="/contact">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Student
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                Teacher
              </NavLink>
            </li>
            
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Add student</Link>&nbsp;&nbsp;
        <Link className="btn btn-outline-light" to="/userteacher/add">Add teacher</Link>
      </div>
    </nav>
  );
};

export default Navbar;