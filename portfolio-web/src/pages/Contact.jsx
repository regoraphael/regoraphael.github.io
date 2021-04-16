import React, { useState } from 'react';
import Header from '../elements/Header';
import Menu from '../elements/Menu';
import whatsappLogo from '../images/whatsappLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';
import githubWhite from '../images/githubWhite.png';
import './Contact.css';

const Contact = () => {
  const [showMenu, changeMenuStatus] = useState(false);
  return (
    <div>
      <Header title="Contact" menu={{ showMenu, changeMenuStatus }} />
      <Menu showMenu={showMenu} />
      <div id="contact-content">
        <h1>Entre em contato comigo.</h1>
        <h2>Minhas redes:</h2>
        <a
          className="contact-method"
          href="https://api.whatsapp.com/send?phone=5585998000667"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo-contact" src={whatsappLogo} alt="whatsapp logo" />
          Whatsapp
        </a>
        <a
          className="contact-method"
          href="https://www.linkedin.com/in/raphaelmlrego/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo-contact" src={linkedinLogo} alt="linkedin logo" />
          Linkedin
        </a>

        <a
          className="contact-method"
          href="https://github.com/regoraphael"
          target="_blank"
          rel="noreferrer"
        >
          <img className="logo-contact" src={githubWhite} alt="github logo" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
