import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="App py-3 bg-dark bg-gradient">
      <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="me-3 footer-icons"/></a> 
      <a href="https://www.linkedin.com/in/andre-vega-lederer/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="me-3 footer-icons"/></a>
      <a href="https://api.whatsapp.com/send/?phone=%2B524422052403&text&app_absent=0" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="me-3 footer-icons"/></a>
      <a href="mailto:ventasleder@hotmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className=" footer-icons"/></a>
    </div>
  );
}

export default Footer;