import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="App py-3 bg-dark bg-gradient">
      <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="me-3 footer-icons"/></a> 
      <a href="https://www.linkedin.com/in/andre-vega-lederer/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className=" footer-icons"/></a>
    </div>
  );
}

export default Footer;