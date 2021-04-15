import React from 'react';
import './Home.css';
import TopBar from '../elements/TopBar';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <TopBar title="Home" />
    <div className="content-home">
      <h1>{'<Hello world! />'}</h1>
      <p>Meu nome é Raphael e sou estudande de Desenvolvimento Web na Trybe!</p>
      <p>Aqui você encontrará informações pessoais e meu portfólio de projetos.</p>
      <div className="div-buttons">
        <Link to="/about">
          <button type="button">Saiba mais sobre mim</button>
        </Link>
        <Link to="/projects">
          <button type="button">Veja meus projetos</button>
        </Link>
        <Link to="/certificates">
          <button type="button">Veja meus certificados</button>
        </Link>
        <Link to="/contact">
          <button type="button">Entre em contato</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
