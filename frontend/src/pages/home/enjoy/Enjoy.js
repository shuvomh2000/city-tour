import React from "react";
import { Container } from "react-bootstrap";
import Btn from '../../../components/layouts/Btn'
import "./enjoy.css";

const Enjoy = () => {
  return (
    <div className="enjoy_part">
      <Container>
        <h2>Enjoy your holiday</h2>
        <p>Curabitur blandit tempus porttitor</p>
        <Btn title="explore" className="enjoy_btn"/>
      </Container>
    </div>
  );
};

export default Enjoy;
