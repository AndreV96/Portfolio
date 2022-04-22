import React from "react";
import {Card, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function Project() {
  return (
    <div className="App ">
    <h1 className="mt-3">Projects</h1>
      <Container className="my-3 projects-container align-items-center justify-content-center">
        <a href="https://limitless-plateau-15055.herokuapp.com/" target="_blank" className="whistle-card"><Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Whistle2.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start card-overlay">
            <Card.Title className="d-inline-block">Whistle</Card.Title>
            <a href="https://github.com/AndreV96/Whistle" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block projects-github-icon"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express/MySql
            </Card.Text>
          </Card.ImgOverlay>
        </Card></a>
        
        <a href="https://andrev96.github.io/Moviez/" target="_blank"><Card className="bg-dark text-white d-block project-card">
          <Card.Img src="moviez_individual.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start card-overlay">
            <Card.Title className="d-inline-block">Moviez</Card.Title>
            <a href="https://github.com/AndreV96/Moviez/" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block projects-github-icon"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/Use of APIs
            </Card.Text>
          </Card.ImgOverlay>
        </Card></a>

        <a href="https://morning-lowlands-78728.herokuapp.com/" target="_blank"><Card className="bg-dark text-white d-block project-card">
          <Card.Img src="Note_Taker.jpg" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start card-overlay">
            <Card.Title className="d-inline-block">Simple Note</Card.Title>
            <a href="https://github.com/AndreV96/Simple_Note" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block projects-github-icon"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/NodeJs/Express
            </Card.Text>
          </Card.ImgOverlay>
        </Card></a>

        <a href="https://andrev96.github.io/Forecasting/" target="_blank"><Card className="bg-dark text-white d-block project-card">
          <Card.Img src="weather_dashboard.png" alt="Card image" className="project-img"/>
          <Card.ImgOverlay className="text-start card-overlay">
            <Card.Title className="d-inline-block">Forecasting</Card.Title>
            <a href="https://github.com/AndreV96/Forecasting/" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block projects-github-icon"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript/Use of APIs
            </Card.Text>
          </Card.ImgOverlay>
        </Card></a>

        <a href="https://andrev96.github.io/Every_Day/" target="_blank" className="ever-day-card"><Card className="bg-dark text-white d-block project-card ">
          <Card.Img src="work_day.jpg" alt="Card image" className="project-img every-day-img"/>
          <Card.ImgOverlay className="text-start card-overlay">
            <Card.Title className="d-inline-block">Every Day</Card.Title>
            <a href="https://github.com/AndreV96/Every_Day/" target="_blank"><FontAwesomeIcon icon={faGithub}  className="ms-2 d-inline-block projects-github-icon"/></a> 
            <Card.Text>
              HTML/CSS/JavaScript
            </Card.Text>
          </Card.ImgOverlay>
        </Card></a>
      </Container>
    </div>
  );
}

export default Project;