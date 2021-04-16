/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import burgerMenuWhite from '../images/burgerMenuWhite.png';
import './Header.css';

const Header = ({ title, menu: { showMenu, changeMenuStatus } }) => {
  document.title = `Portfólio - ${title}`;
  const handleMenuIcon = () => {
    switch (showMenu) {
      case false:
        document.getElementById('menu-icon').className = 'rotate90';
        changeMenuStatus(true);
        break;
      case true:
        document.getElementById('menu-icon').className = '';
        changeMenuStatus(false);
        break;
      default:
        break;
    }
  };
  const ButtonToHome = () => (
    <Link to="/">
      <button id="button-home" type="button">Home</button>
    </Link>
  );
  return (
    <header className="top-bar">
      <img
        src={burgerMenuWhite}
        id="menu-icon"
        alt="Menu Icon"
        onClick={handleMenuIcon}
      />
      <h2 id="title">{`<${title} />`}</h2>
      { title !== 'Home' ? ButtonToHome() : null }
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
