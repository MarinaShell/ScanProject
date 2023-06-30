import React from 'react';
import './Footer.css'
import logo from './logo2.svg'

const Footer = () => {
  return (
    <footer>
      <img src={logo} class="Logo" />
      <p class="foot_text">
        г. Москва, Цветной б-р, 40<br />
        +7 495 711 21 11<br />
        info@skan.ru<br />
        <br />
        Copyright, 2022
      </p>
    </footer>
  )
}

export default Footer

