import React from "react";
import { Container } from "react-bootstrap";
import Flex from "../../../components/layouts/Flex";
import "./SubBanner.css";

const SubBanner = () => {
  return (
    <div>
      <Container fluid="xl">
        <div className="sub_banner">
          <Flex className="sub_banner_part">
            <div>
              <h3>Sale up for new year</h3>
              <h4>Curabitur blandit tempus</h4>
            </div>
            <div>
              <a href="#">Read more</a>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default SubBanner;
