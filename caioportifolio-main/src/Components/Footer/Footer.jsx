import React from "react";

import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'



const Footer = () => {
  return (<footer>  
    <a href="#" className="footer__logo">CAIO FERNANDO</a>

    <ul className="permalinks">
      <li><a href="#"></a>Home</li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#experience">Experiência</a></li>
      <li><a href="#portifolio">Portfolio</a></li>
      <li><a href="#contact">Contato</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>

    </div>

  </footer>)
}

export default Footer