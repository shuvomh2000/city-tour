import React from "react";
import "./recent.css";
import { Container } from "react-bootstrap";
import Title from "../../../components/layouts/title/Title";
import Flex from "../../../components/layouts/Flex";
import Image from "../../../components/layouts/Image";

const Recent = () => {
  return (
    <Container>
      <Title title="Recent Articles" />
      <Flex className="recent_part">
        <div>
          <div className="recent_img">
            <Image src="assets/images/homePage/recent1.png" />
          </div>
          <h3>A Seaside Reset in Laguna Beach</h3>
          <p>30 Nov 2018</p>
        </div>
        <div>
          <div className="recent_img">
            <Image src="assets/images/homePage/recent1.png" />
          </div>
          <h3>A Seaside Reset in Laguna Beach</h3>
          <p>30 Nov 2018</p>
        </div>
        <div>
          <div className="recent_img">
            <Image src="assets/images/homePage/recent1.png" />
          </div>
          <h3>A Seaside Reset in Laguna Beach</h3>
          <p>30 Nov 2018</p>
        </div>
      </Flex>
    </Container>
  );
};

export default Recent;
