import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__logo">
          Jacqui Keating
        </Link>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/projects" className="nav__link">
              Projects
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
