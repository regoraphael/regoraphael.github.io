import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({ showMenu }) => (
  <div className={showMenu ? 'main openMenu' : 'main closeMenu'}>
    <h2>{'<Menu />'}</h2>
    <nav className="nav-menu ">
      <Link to="/portfolio/about">
        <button type="button">Sobre mim</button>
      </Link>
      <Link to="/portfolio/projects">
        <button type="button">Projetos</button>
      </Link>
      <Link to="/portfolio/contact">
        <button type="button">Contato</button>
      </Link>
    </nav>
  </div>
);

Menu.propTypes = {
  showMenu: PropTypes.bool,
}.isRequired;

export default Menu;
