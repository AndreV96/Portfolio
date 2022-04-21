import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation(props) {
  function clickHandler(e) {
    const id = e.target.id
    props.setCurrentPage(id) 
  }
  return (
    <div>
      <Navbar className="bg-primary bg-gradient py-3" variant="dark">
        <Container>
          <Navbar.Brand className="fs-2">André Vega</Navbar.Brand>
            <Nav>
              <Nav.Link id="about" onClick={clickHandler} >About Me</Nav.Link>
              <Nav.Link id="portfolio" onClick={clickHandler} >Portfolio</Nav.Link>
              <Nav.Link id="contact" onClick={clickHandler} >Contact</Nav.Link>
              <Nav.Link id="resume" onClick={clickHandler} >Resume</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation