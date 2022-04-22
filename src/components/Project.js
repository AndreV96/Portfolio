import React from "react";
import {Card, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function Project() {
  return (
    <div className="App">
    <h1 className="mt-3">Projects</h1>
      <Container className="my-3 projects-container">
        <Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        
        <Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  );
}

export default Project;