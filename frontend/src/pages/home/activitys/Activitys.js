import React from 'react'
import Slider from "react-slick";
import { Container } from 'react-bootstrap'
import Title from '../../../components/layouts/title/Title'
import Image from '../../../components/layouts/Image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./activitys.css"

const activitys = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Container className='act'>
      <Title title="Top activity"/>
      <Slider {...settings}>
      <div>
        <div className='act_part'>
          <Image src="assets/images/homePage/act1.png"/>
          <h4>gondola ride</h4>
        </div>
      </div>
      <div>
        <div className='act_part'>
          <Image src="assets/images/homePage/act1.png"/>
          <h4>gondola ride</h4>
        </div>
      </div>
      <div>
        <div className='act_part'>
          <Image src="assets/images/homePage/act1.png"/>
          <h4>gondola ride</h4>
        </div>
      </div>
      <div>
        <div className='act_part'>
          <Image src="assets/images/homePage/act1.png"/>
          <h4>gondola ride</h4>
        </div>
      </div>
      <div>
        <div className='act_part'>
          <Image src="assets/images/homePage/act1.png"/>
          <h4>gondola ride</h4>
        </div>
      </div>
      </Slider>
    </Container>
  )
}

export default activitys