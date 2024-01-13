import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`navbar`}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
