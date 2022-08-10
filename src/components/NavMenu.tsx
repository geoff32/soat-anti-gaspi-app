import React from 'react';
import Link from './Link';
import './NavMenu.css';

const NavMenu: React.FC = () => (
  <header className="nav-menu">
    <nav className="navbar">
      <div className="d-flex">
        <span className="app-title"><Link to="/">Anti Gaspi</Link></span>
        <div className="menu-container d-flex">
          <ul className="menu">
            <li className="menu-item"><Link to="/offers">Annonces</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default NavMenu;