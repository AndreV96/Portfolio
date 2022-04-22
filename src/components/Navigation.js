import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation(props) {
  function clickHandler(e) {
    const id = e.target.id
    props.setCurrentPage(id) 
  }
  return (
    <div>
      <Navbar className="bg-persian-blue bg-gradient py-3" variant="dark">
        <Container>
          <Navbar.Brand className="fs-2">André Vega</Navbar.Brand>
            <Nav className="">
              <Nav.Link id="about" onClick={clickHandler} className={props.currentPage === "about" ? "active-link" : ""}>About Me</Nav.Link>
              <Nav.Link id="portfolio" onClick={clickHandler} className={props.currentPage === "portfolio" ? "active-link" : ""}>Portfolio</Nav.Link>
              <Nav.Link id="contact" onClick={clickHandler} className={props.currentPage === "contact" ? "active-link" : ""}>Contact</Nav.Link>
              <Nav.Link id="resume" onClick={clickHandler} className={props.currentPage === "resume" ? "active-link" : ""}>Resume</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation