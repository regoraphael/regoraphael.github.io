import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';
import projects from '../data/projects';
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
  const { name, description } = projects[index];
  return (
    <div>
      <Header title="Projects" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
      <div id="project-details">
        <h1>{`Projeto ${name}`}</h1>
        <h4>{`Detalhes: ${description}`}</h4>
        <button type="button" onClick={() => changeProject('+')}>
          Próximo Projeto
        </button>
        <button type="button" onClick={() => changeProject('-')}>
          Projeto Anterior
        </button>
      </div>
    </div>
  );
};

export default Projects;
