import React from "react";
import { Container} from "react-bootstrap";
import "./Banner.css"

const Banner = () => {
  return (
   <>
   <div className="banner_part">
      <Container fluid="xl">
        <h5>city tour</h5>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <a href="#" className="btn">buy the tour</a>
      </Container>
   </div>
   </>
  );
};

export default Banner;
