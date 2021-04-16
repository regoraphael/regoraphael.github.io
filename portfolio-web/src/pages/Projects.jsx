import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';

const Projects = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div>
      <Header title="Projects" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
    </div>

  );
};

export default Projects;
