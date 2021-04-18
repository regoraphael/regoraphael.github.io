import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';
import projects from '../data/projects';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import './Projects.css';

const Projects = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  const [index, changeIndex] = useState(0);
  const changeProject = (signal) => {
    switch (signal) {
      case '+':
        if (index === projects.length - 1) {
          changeIndex(0);
          break;
        }
        changeIndex(index + 1);
        break;
      case '-':
        if (index === 0) {
          changeIndex(projects.length - 1);
          break;
        }
        changeIndex(index - 1);
        break;
      default: break;
    }
  };
  const {
    name,
    description,
    image,
    tecnologies,
  } = projects[index];
  return (
    <div>
      <Header title="Projects" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
      <div id="project-details">
        <button type="button" onClick={() => changeProject('-')}>
          <img className="direction-arrow" src={leftArrow} alt="projeto anterior" />
        </button>
        <div>
          <h1>{`Projeto ${name}`}</h1>
          <h4>{`Detalhes: ${description}`}</h4>
          <img id="project-image" src={image} alt="project thumb" />
          <div id="footer-content">
            <ul>
              Tecnologias utilizadas:
              { tecnologies.map((tecnologie) => <li>{tecnologie}</li>) }
            </ul>
            <div>
              <button type="button">Ver repositório do Projeto</button>
              <button type="button">Ver site do projeto</button>
            </div>
          </div>
        </div>
        <button style={{ marginLeft: '2vw' }} type="button" onClick={() => changeProject('+')}>
          <img className="direction-arrow" src={rightArrow} alt="próximo projeto" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
