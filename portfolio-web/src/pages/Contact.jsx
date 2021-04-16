import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';

const Contact = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div>
      <Header title="Contact" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
    </div>
  );
};

export default Contact;
