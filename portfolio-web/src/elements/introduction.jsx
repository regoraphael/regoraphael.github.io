import React from 'react';
import Image from './foto.jpg'

class Introduction extends React.Component {
  render() {
    return(
      <div className="introduction">
        <div className="introduction-photo">
          <img src={Image} alt="foto de raphael" className = "photo" />
        </div>
        <div className="introduction-name">
          <h2>Raphael Magalhães Lima Rêgo</h2>
        </div>
        <div className="introduction-text">
          <h4><em>Brasileiro, 26 anos, reside em Eusébio, Ceará, Brasil.</em></h4>
        </div>
      </div>
    );
  }
}

export default Introduction;
