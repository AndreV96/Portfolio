import React from "react";
import {Container, Image} from 'react-bootstrap';

function AboutMe() {
  return (
    <div className="App py-3 bg-light bg-gradient justify-content-center d-flex">
      <Container className="max-width-720">
      <h2 className="text-center">About Me</h2>
      <Image className="d-block rounded-circle about-me-img mb-3" src="pp.jpeg"></Image>
      <p className="text-justify">Welcome to my Professional Portfolio, here you will be able to find all proyects I have created from scratch. They where made with the purpose of practicing my web developer skills in front-end as well as in back-end. Here you will find links to all the deployed websites and their github repositories. At the end of this portfolio you will find contact information with links to my LinkedIn, GitHub profile and CV (resume). </p>
      <p className="text-justify">My name is André Vega Lederer, I've been studying Computer Sciences in TecMilenio for the last 1.5 years. At the same time I've been learning Web Development skills to become a Full-Stack web developer. At the moment, I am taking the Tecnologico de Monterrey Coding Bootcamp. A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars.js & ReactJS. I will finish it on May 12th.</p>
      </Container>
    </div>
  );
}

export default AboutMe;