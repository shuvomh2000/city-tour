import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Flex from "../../../components/layouts/Flex";
import Image from "../../../components/layouts/Image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "./Venice.css";
import Title from "../../../components/layouts/title/Title";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrows right_arrow" onClick={onClick}>
      <BsChevronRight className="arrow_icon" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrows left_arrow" onClick={onClick}>
      <BsChevronLeft className="arrow_icon" />
    </div>
  );
}

const Venice = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };
  return (
    <Container>
      <Flex className="venice_part">
        <div className="venice_bio">
          {/* <h3>Go to Venice</h3> */}
          <Title title="Go to Venice"/>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page ...
          </p>
        </div>
        <div className="venice_imgPart">
          <Slider {...settings}>
            <div>
              <div className="venice_img">
                <Image src="assets/images/homePage/venice1.png" />
                <div className="venice_price">
                  <h4>$844</h4>
                  <h3>
                    $844<span> /person</span>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="venice_img">
                <Image src="assets/images/homePage/venice1.png" />
                <div className="venice_price">
                  <h4>$844</h4>
                  <h3>
                    $844<span> /person</span>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="venice_img">
                <Image src="assets/images/homePage/venice1.png" />
                <div className="venice_price">
                  <h4>$844</h4>
                  <h3>
                    $844<span> /person</span>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="venice_img">
                <Image src="assets/images/homePage/venice1.png" />
                <div className="venice_price">
                  <h4>$844</h4>
                  <h3>
                    $844<span> /person</span>
                  </h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Flex>

      {/* <Slider {...settings}>
        <div>
          <div style={{ margin: "0 10px" }}>
            <Image src="assets/images/homePage/venice1.png" />
            <div className="venice_price">
              <h4>$844</h4>
              <h3>
                $844<span> /person</span>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <Image src="assets/images/homePage/venice1.png" />
            <div className="venice_price">
              <h4>$844</h4>
              <h3>
                $844<span> /person</span>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <Image src="assets/images/homePage/venice1.png" />
            <div className="venice_price">
              <h4>$844</h4>
              <h3>
                $844<span> /person</span>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <Image src="assets/images/homePage/venice1.png" />
            <div className="venice_price">
              <h4>$844</h4>
              <h3>
                $844<span> /person</span>
              </h3>
            </div>
          </div>
        </div>
      </Slider> */}
    </Container>
  );
};

export default Venice;
