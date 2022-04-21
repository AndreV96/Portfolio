import React from "react";
import {Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';

function Resume() {
  return (
    <div className="App">
      <Container className="text-start">
        <h2 >Resume</h2>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Front-end Proficiencies</Card.Title>
          </Card.Body>
          <ListGroup>
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
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Back-end Proficiencies</Card.Title>
          </Card.Body>
          <ListGroup>
            <ListGroupItem>APIs</ListGroupItem>
            <ListGroupItem>Node</ListGroupItem>
            <ListGroupItem>Express</ListGroupItem>
            <ListGroupItem>MySQL, Sequelize</ListGroupItem>
            <ListGroupItem>NoSQL</ListGroupItem>
            <ListGroupItem>MongoDB, Mongoose</ListGroupItem>
            <ListGroupItem>REST</ListGroupItem>
            <ListGroupItem>GraphQL</ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
}

export default Resume;