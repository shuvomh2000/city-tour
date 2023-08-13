import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import Image from "../../../components/layouts/Image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";

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
  

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };
  return (
    <div className="testimonial_part">
      <Container>
        <Slider {...settings}>
        <div>
          <div className="testimonial_img">
            <Image src="assets/images/homePage/venice1.png" />
          </div>
          <h6>Traveler</h6>
          <p>
            We had 10 days. Iguazu Falls, Rio, and Paraty. We had Orico as a
            guide for the first 4 days...he was fabulous.{" "}
          </p>
        </div>
        <div>
          <div className="testimonial_img">
            <Image src="assets/images/homePage/venice1.png" />
          </div>
          <h6>Traveler</h6>
          <p>
            We had 10 days. Iguazu Falls, Rio, and Paraty. We had Orico as a
            guide for the first 4 days...he was fabulous.{" "}
          </p>
        </div>
        <div>
          <div className="testimonial_img">
            <Image src="assets/images/homePage/venice1.png" />
          </div>
          <h6>Traveler</h6>
          <p>
            We had 10 days. Iguazu Falls, Rio, and Paraty. We had Orico as a
            guide for the first 4 days...he was fabulous.{" "}
          </p>
        </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
