import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

/**
 *  Navbar Component
 *  Description:
 */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Wedding Planner
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
