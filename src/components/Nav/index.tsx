import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="container">
      <div className="left">
        <p>Logo here</p>
      </div>
      <div className="right">
        <ul className="list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
