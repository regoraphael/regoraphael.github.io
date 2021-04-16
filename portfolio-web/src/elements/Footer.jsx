import React from 'react';
import githubWhite from '../images/githubWhite.png';
import linkedinWhite from '../images/linkedinWhite.png';
import whatsappWhite from '../images/whatsappWhite.png';

import './Footer.css';

const Footer = () => (
  <footer>
    <a href="https://api.whatsapp.com/send?phone=5585998000667" target="_blank" rel="noreferrer">
      <img src={whatsappWhite} alt="whatsapp icon" />
    </a>
    <a href="https://github.com/regoraphael" target="_blank" rel="noreferrer">
      <img src={githubWhite} alt="github icon" />
    </a>
    <a href="https://www.linkedin.com/in/raphaelmlrego/" target="_blank" rel="noreferrer">
      <img src={linkedinWhite} alt="linkedin icon" />
    </a>

  </footer>
);

export default Footer;
