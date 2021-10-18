import React from 'react';
import './Footer.css';
import logoMentalHelpFooter from '../../../img/logoMentalHelpFooter.png';
import logoLinkedin from '../../../img/logoLinkedin.png';
import logoInstagram from '../../../img/logoInstagram.png';
import logoFacebook from '../../../img/logoFacebook.png';

function Footer(){
  return (
    <>
    <div className="background-footer">
      <div className="flex-container">
        <div class="footer1">
          <img className="logo-footer" src={logoMentalHelpFooter} alt="" />
          <p className="texto-footer">© 2021 Logo Company. Todos os direitos reservados.</p>
        </div>
        <div className="footer2">
          <div className="lista-components texto-footer">
            <a href="#">Inicio</a>
            <a href="#">Objetivo</a>
            <a href="#">Historia</a>
            <a href="#">Equipe</a>
          </div>
          <div className="logos-redes">
            <a href="">
              <img className="imgLogoRedes" src={logoLinkedin} alt="" />
            </a>
            <a href="">
              <img className="imgLogoRedes" src={logoInstagram} alt="" />
            </a>
            <a href="">
              <img className="imgLogoRedes" src={logoFacebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;