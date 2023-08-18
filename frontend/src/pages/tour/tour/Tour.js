import React from "react";
import { Container } from "react-bootstrap";
import Overview from "../overview/Overview";
import Flex from "../../../components/layouts/Flex"
import Highlight from "../highlight/Highlight";
import TourDetails from "../tourDetails/TourDetails";
import "./tour.css";

const Tour = () => {
  return (
    <Container>
      <Flex className="tour_part">
        <div className="tour_right">
            <Overview/>
            <Highlight/>
            <TourDetails/>
        </div>
        <div className="tour_left"></div>
      </Flex>
    </Container>
  );
};

export default Tour;
