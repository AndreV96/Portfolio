import React from "react";
import {Container, Image} from 'react-bootstrap';

function AboutMe() {
  return (
    <div className="App py-3 bg-cream">
      <Container>
      <h2 className="text-start">About Me</h2>
      <Image className="d-block rounded-circle" src="../public/pp.jpeg"></Image>
      <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum ante eu porta vehicula. Aenean nec felis auctor, blandit sapien sit amet, consectetur libero. Aenean vitae auctor sapien, vitae sagittis elit. Maecenas sollicitudin massa vitae ullamcorper vehicula. Fusce tincidunt lorem sem, nec iaculis nisl consequat vitae. Nunc interdum semper cursus. Phasellus ante tellus, vestibulum nec vehicula a, pharetra at tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel faucibus sapien. Morbi dignissim sapien aliquam urna sollicitudin aliquet. </p>
      <p className="text-justify">Integer eget nunc at nisl pharetra lobortis. Quisque quam enim, elementum ac iaculis ac, vulputate quis turpis. Aliquam erat volutpat. Aliquam erat volutpat.</p>
      </Container>
    </div>
  );
}

export default AboutMe;