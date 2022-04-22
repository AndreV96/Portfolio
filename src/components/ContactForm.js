import React from "react";
import {Form, Button, Container, FormControl} from 'react-bootstrap';

function ContactForm() {
  return (
    <div className="App">
      <Container className="py-3 container-form">
        <h1>Contact</h1>
        <Form className="text-start">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <FormControl as="textarea" aria-label="With textarea" placeholder="Enter a message"/>
          </Form.Group>
          {/* Add a type="submit" to add the functionality */}
          <Button className="bg-persian-blue bg-gradient">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ContactForm;