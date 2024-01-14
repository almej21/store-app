/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// its critical to use the is_logged_in value from the local storage only
//for rendering data that is not private.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img src="/logo.png" alt="logo" className="navbar-logo"></img>
      <div className={`nav-items ${isOpen && "open"}`}>
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/cart">
            Cart
          </Link>
        </li>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
