import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';

const About = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div>
      <Header title="About" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
    </div>
  );
};

export default About;
