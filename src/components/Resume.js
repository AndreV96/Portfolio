import React from "react";
import {Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';

function Resume() {
  return (
    <div className="App my-3">
      <Container className="text-start ">
        <h2 className="fs-1 text-center">Resume</h2>
        <p className="text-center">Download my resume <a href="https://docs.google.com/document/d/1_NFyHBoiB_Wv84GcDTsRbp2GY3WaHEgF18DXH0utzkI/edit" target="_blank">here!</a></p>
        <div className="d-flex justify-content-center">
          <Card border="secondary" style={{ width: '18rem' }} className="d-inline-block bg-light me-1">
            <Card.Body>
              <Card.Title className="">Front-end Proficiencies</Card.Title>
            </Card.Body>
            <ListGroup className="rounded-0">
              <ListGroupItem>HTML5</ListGroupItem>
              <ListGroupItem>CSS3</ListGroupItem>
              <ListGroupItem>Javascript</ListGroupItem>
              <ListGroupItem>JQuery</ListGroupItem>
              <ListGroupItem>Responsive Design</ListGroupItem>
              <ListGroupItem>React</ListGroupItem>
              <ListGroupItem>Bootstrap</ListGroupItem>
              <ListGroupItem>Tailwind CSS</ListGroupItem>
              <ListGroupItem>SASS</ListGroupItem>
            </ListGroup>
          </Card>
          <Card border="secondary" style={{ width: '18rem' }} className="d-inline-block bg-light ms-1">
            <Card.Body>
              <Card.Title className="">Back-end Proficiencies</Card.Title>
            </Card.Body>
            <ListGroup className="rounded-0">
              <ListGroupItem>APIs</ListGroupItem>
              <ListGroupItem>Node</ListGroupItem>
              <ListGroupItem>Express</ListGroupItem>
              <ListGroupItem>MySQL, Sequelize</ListGroupItem>
              <ListGroupItem>NoSQL</ListGroupItem>
              <ListGroupItem>MongoDB</ListGroupItem>
              <ListGroupItem>Mongoose</ListGroupItem>
              <ListGroupItem>REST</ListGroupItem>
              <ListGroupItem>GraphQL</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Resume;