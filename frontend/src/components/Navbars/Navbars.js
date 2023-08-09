import React, { useState } from "react";
import { Container, Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import Image from "../../components/layouts/Image";
import Flex from "../layouts/Flex";
import Btn from "../layouts/Btn";
import InputBox from "../layouts/inputBox/InputBox";
import { BsTelephoneFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./Navbars.css";

const Navbars = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [showr, setShowr] = useState(false);
  const handleCloser = () => setShowr(false);
  // const handleShowr = () => setShowr(true);

  const handleModal = () => {
    if (show == false) {
      setShow(true);
      setShowr(false);
    } else {
      setShow(false);
      setShowr(true);
    }
  };

  return (
    <Navbar className="navbar">
      <Container fluid="xl">
        <Navbar.Brand href="#home">
          <Image src="assets/images/homePage/logo.png" />
        </Navbar.Brand>
        <Nav className="me-auto main_menu">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">LISTING</Nav.Link>
          <Nav.Link href="#pricing">tours</Nav.Link>
          <Nav.Link href="#pricing">DESTINATIONS</Nav.Link>
          <Nav.Link href="#pricing">PAGES</Nav.Link>
        </Nav>
        <Flex className="menu_right">
          <div className="call">
            <a href="#">
              <span className="icon">
                <BsTelephoneFill />
              </span>
              + 12 43223354
            </a>
          </div>
          <div className="login_part">
            <h3 onClick={handleModal} className="title">
              login
            </h3>

            <Modal show={show} onHide={handleClose}>
              <Flex className="inner" onClick={() => setShow(!show)}>
                <h3>sign up</h3>
                <RxCross1
                  style={{ fontSize: "32px", cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                />
              </Flex>
              <div className="modal_body">
                <div>
                  <InputBox placeholder="full name" />
                </div>
                <div>
                  <InputBox placeholder="email*" />
                </div>
                <div>
                  <InputBox placeholder="password*" />
                </div>
                <Flex className="navbar_input">
                  <div>
                    <input type="checkbox" id="privacy_policy" />
                    <label for="privacy_policy">
                      I have read and accept the
                    </label>
                  <a href="#">Terms and Privacy Policy</a>
                  </div>
                </Flex>
                <Btn title="sign up" className="navbar_btn" />
                <div className="modal_footer">
                  <h3>or continue with</h3>
                  <Flex className="social_icon">
                    <div className="social_icon_fb">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </div>
                    <div className="social_icon_go">
                      <a href="#">
                        <FaGoogle />
                      </a>
                    </div>
                  </Flex>
                  <h3>
                    Already have an account?
                    <a href="#" onClick={handleModal}>
                      Log In
                    </a>
                  </h3>
                </div>
              </div>
            </Modal>
            {/*  */}
            {/*  */}
            {/*  */}
            <Modal show={showr} onHide={handleCloser}>
              <Flex className="inner" onClick={() => setShowr(!showr)}>
                <h3>log in</h3>
                <RxCross1
                  style={{ fontSize: "32px", cursor: "pointer" }}
                  onClick={() => setShowr(!showr)}
                />
              </Flex>
              <div className="modal_body">
                <div>
                  <InputBox placeholder="email*" />
                </div>
                <div>
                  <InputBox placeholder="password*" />
                </div>
                <Flex className="navbar_input">
                  <div>
                    <input type="checkbox" id="privacy_policy" />
                    <label for="privacy_policy">Remember me</label>
                  </div>
                  <a href="#">forget password?</a>
                </Flex>
                <Btn title="sign up" className="navbar_btn" />
                <div className="modal_footer">
                  <h3>or continue with</h3>
                  <Flex className="social_icon">
                    <div className="social_icon_fb">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </div>
                    <div className="social_icon_go">
                      <a href="#">
                        <FaGoogle />
                      </a>
                    </div>
                  </Flex>
                  <h3>
                    Don't have an account?
                    <a href="#" onClick={handleModal}>
                      SIGN UP
                    </a>
                  </h3>
                </div>
              </div>
            </Modal>
            {/*  */}
            {/*  */}
            {/*  */}
          </div>
        </Flex>
      </Container>
    </Navbar>
  );
};

export default Navbars;
