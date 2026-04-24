import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">S</span>
          <span>Sejal <em style={{fontStyle: 'italic', color: 'var(--gold)'}}>N.</em></span>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/sejalnadimatla123"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
