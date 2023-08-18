import React from "react";
import { Container } from "react-bootstrap";
import Overview from "../overview/Overview";
import Flex from "../../../components/layouts/Flex"
import "./tour.css";
import Highlight from "../highlight/Highlight";

const Tour = () => {
  return (
    <Container>
      <Flex className="tour_part">
        <div className="tour_right">
            <Overview/>
            <Highlight/>
        </div>
        <div className="tour_left"></div>
      </Flex>
    </Container>
  );
};

export default Tour;
