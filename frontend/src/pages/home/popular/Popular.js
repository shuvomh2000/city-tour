import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Title from "../../../components/layouts/title/Title";
import Flex from "../../../components/layouts/Flex";
import Image from "../../../components/layouts/Image";
import { AiFillStar, AiFillThunderbolt } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popular.css";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrow: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true
  };
  return (
    <Container className="popular_part">
      <Title title="Popular tour in the month" />
      <div className="popular_inner">
        <Slider {...settings}>
          <div className="popular_box">
            <div className="popular_img">
              <Image src="assets/images/homePage/popular1.png" />
              <h3>featured</h3>
            </div>
            <div className="popular_text">
              <Flex className="popular_detail1">
                <h3>National Parks Tour One Days</h3>
                <FaHeart className="popular_detail1_icon" />
              </Flex>
              <Flex className="popular_detail2">
                <Flex>
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                </Flex>
                <h3>2 reviews</h3>
              </Flex>
              <h5 className="cross_text">$856</h5>
              <Flex className="popular_detail3">
                <Flex className="popular_detail3_left">
                  <BiTimeFive className="popular_detail3_left_icon" />
                  <h3 className="popular_detail3_left_hour">5 hours</h3>
                </Flex>
                <Flex className="popular_detail3_right">
                  <AiFillThunderbolt className="popular_price_icon" />
                  <h4 className="popular_price">
                    <span>from</span>$8999
                  </h4>
                </Flex>
              </Flex>
            </div>
          </div>
          {/*  */}
          <div className="popular_box">
            <div className="popular_img">
              <Image src="assets/images/homePage/popular1.png" />
              <h3>featured</h3>
            </div>
            <div className="popular_text">
              <Flex className="popular_detail1">
                <h3>National Parks Tour One Days</h3>
                <FaHeart className="popular_detail1_icon" />
              </Flex>
              <Flex className="popular_detail2">
                <Flex>
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                </Flex>
                <h3>2 reviews</h3>
              </Flex>
              <h5 className="cross_text">$856</h5>
              <Flex className="popular_detail3">
                <Flex className="popular_detail3_left">
                  <BiTimeFive className="popular_detail3_left_icon" />
                  <h3 className="popular_detail3_left_hour">5 hours</h3>
                </Flex>
                <Flex className="popular_detail3_right">
                  <AiFillThunderbolt className="popular_price_icon" />
                  <h4 className="popular_price">
                    <span>from</span>$8999
                  </h4>
                </Flex>
              </Flex>
            </div>
          </div>
          {/*  */}
          <div className="popular_box">
            <div className="popular_img">
              <Image src="assets/images/homePage/popular1.png" />
              <h3>featured</h3>
            </div>
            <div className="popular_text">
              <Flex className="popular_detail1">
                <h3>National Parks Tour One Days</h3>
                <FaHeart className="popular_detail1_icon" />
              </Flex>
              <Flex className="popular_detail2">
                <Flex>
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                </Flex>
                <h3>2 reviews</h3>
              </Flex>
              <h5 className="cross_text">$856</h5>
              <Flex className="popular_detail3">
                <Flex className="popular_detail3_left">
                  <BiTimeFive className="popular_detail3_left_icon" />
                  <h3 className="popular_detail3_left_hour">5 hours</h3>
                </Flex>
                <Flex className="popular_detail3_right">
                  <AiFillThunderbolt className="popular_price_icon" />
                  <h4 className="popular_price">
                    <span>from</span>$8999
                  </h4>
                </Flex>
              </Flex>
            </div>
          </div>
          {/*  */}
          <div className="popular_box">
            <div className="popular_img">
              <Image src="assets/images/homePage/popular1.png" />
              <h3>featured</h3>
            </div>
            <div className="popular_text">
              <Flex className="popular_detail1">
                <h3>National Parks Tour One Days</h3>
                <FaHeart className="popular_detail1_icon" />
              </Flex>
              <Flex className="popular_detail2">
                <Flex>
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                  <AiFillStar className="popular_detail2_icon" />
                </Flex>
                <h3>2 reviews</h3>
              </Flex>
              <h5 className="cross_text">$856</h5>
              <Flex className="popular_detail3">
                <Flex className="popular_detail3_left">
                  <BiTimeFive className="popular_detail3_left_icon" />
                  <h3 className="popular_detail3_left_hour">5 hours</h3>
                </Flex>
                <Flex className="popular_detail3_right">
                  <AiFillThunderbolt className="popular_price_icon" />
                  <h4 className="popular_price">
                    <span>from</span>$8999
                  </h4>
                </Flex>
              </Flex>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Popular;
