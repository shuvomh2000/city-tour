import React from "react";
import "./popular.css";
import { Container } from "react-bootstrap";
import Title from "../../../components/layouts/title/Title";
import Flex from "../../../components/layouts/Flex";
import Image from "../../../components/layouts/Image"

const Popular = () => {
  return (
    <Container className="popular_part">
      <Title title="Popular tour in the month" />
      <Flex className="popular_inner">
        <div className="popular_box">
            <div className="popular_img">
                <Image src="assets/images/homePage/popular1.png"/>
                <h3>featured</h3>
            </div>
            <div className="popular_text">
                <Flex></Flex>
                <div></div>
                <Flex></Flex>
            </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Popular;
