import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../elements/Header';
import Menu from '../elements/Menu';
import Foto from '../images/foto.jpg';
import javascriptLogo from '../images/javascriptLogo.png';
import reactLogo from '../images/reactLogo.png';
import reduxLogo from '../images/reduxLogo.png';
import cssLogo from '../images/cssLogo.png';
import jestLogo from '../images/jestLogo.png';
import './About.css';

const About = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div>
      <Header title="About" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
      <div id="about-content">
        <div id="center-div">
          <div id="top-div">
            <img src={Foto} alt="foto de raphael" id="about-img" />
            <div>
              <h2>Raphael Magalhães Lima Rêgo</h2>
              <h4><em>Brasileiro, 27 anos, reside em Eusébio, Ceará, Brasil.</em></h4>
              <h4><em>Desenvolvedor Front-End Júnior</em></h4>
              <h4><em>Estudante de Desenvolvimento Web</em></h4>
            </div>
          </div>
          <p>
            Formado em Administração de Empresas e apaixonado por tecnologia com foco no
            Desenvolvimento de soluções Web.
          </p>

          <p>
            Minha trajetória profissional se iniciou pela minha paixão em empreender, administrei
            uma loja on-line de perfumes, loja de artigo de celulares e por fim uma espetaria.
          </p>
          <p>
            Sempre tive habilidade e um forte interesse em tecnologia e decidi focar na área.
          </p>
          <p>
            Atualmente sou estudante de
            <em> Desenvolvimento de Software </em>
            da
            <strong> Trybe </strong>
            e todos os meus interesses profissionais estão voltados para o mercado de tecnologia.
          </p>
          <Link to="/portfolio/contact">
            <button type="button">Entre em contato</button>
          </Link>
        </div>
        <div id="right-div">
          <h3>Tecnologias:</h3>
          <div className="tecnologies">
            <img className="logo-png" src={reactLogo} alt="react-logo" />
            ReactJS
          </div>
          <div className="tecnologies">
            <img className="logo-png" src={reactLogo} alt="react-logo" />
            Hooks
          </div>
          <div className="tecnologies">
            <img className="logo-png" src={reduxLogo} alt="redux-logo" />
            Redux
          </div>
          <div className="tecnologies">
            <img className="logo-png" src={javascriptLogo} alt="javascript-logo" />
            Javascript
          </div>
          <div className="tecnologies">
            <img className="logo-png" src={cssLogo} alt="css-logo" />
            CSS
          </div>
          <div className="tecnologies">
            <img className="logo-png" src={jestLogo} alt="jest-logo" />
            Jest
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
