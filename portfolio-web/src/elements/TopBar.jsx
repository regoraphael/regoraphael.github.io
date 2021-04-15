import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuBurger from './burgerIcon.png';
import './TopBar.css';

const TopBar = ({ title }) => {
  document.title = `Portfólio - ${title}`;
  const ButtonToHome = () => (
    <Link to="/">
      <button type="button">Ir para a Home</button>
    </Link>
  );
  return (
    <div className="top-bar">
      <div className="left-div">
        <img src={MenuBurger} className="menu-icon" alt="Menu Icon" />
      </div>
      <div className="middle-div">
        <h3>{`<${title} />`}</h3>
      </div>
      <div className="right-div">
        { title !== 'Home' ? ButtonToHome() : null }
      </div>
    </div>
  );
};

TopBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default TopBar;
