import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import Menu from '../elements/Menu';

const Home = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div className="home">
      <Header title="Home" menu={{ showMenu, changeMenuStatus }} />
      <div className="main-div">
        <Menu showMenu={showMenu} />
        <div className="content-home">
          <h1>{'<Hello world! />'}</h1>
          <p>
            {'Eu sou Raphael, sou Desenvolvedor Front-End Júnior e estudo de Desenvolvimento Web na '}
            <a
              className="link-trybe"
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noreferrer"
            >
              Trybe.
            </a>
          </p>
          <p>
            Aqui você encontra algumas informações minhas, meus dados de contato e meu
            portfólio de projetos.
          </p>
          <nav className="div-buttons">
            <Link to="/portfolio/about">
              <button type="button">Saiba mais sobre mim</button>
            </Link>
            <Link to="/portfolio/projects">
              <button type="button">Veja meus projetos</button>
            </Link>
            <Link to="/portfolio/contact">
              <button type="button">Entre em contato</button>
            </Link>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
