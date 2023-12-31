import React from "react";
import Flex from "../../../components/layouts/Flex";
import Image from "../../../components/layouts/Image";
import { BiSolidMap, BiTime } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import {MdPeopleOutline,MdOutlineGTranslate  } from "react-icons/md";
import "./overview.css";
import SubHeading from "../../../components/layouts/subheadings/SubHeadings";

const Overview = () => {
  return (
    <div className="overview">
      <div>
        <Image src="assets/images/tourPage/tour1.jpg" />
      </div>
      <h1 className="overview_heading">Super Maldives Trip</h1>
      <Flex className="heading_inner">
        <Flex className="map_pin">
          <BiSolidMap />
          California,USA
        </Flex>
        <Flex className="review">
          <Flex>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
          <h6>3 reviews</h6>
        </Flex>
      </Flex>
      
      <Flex className="overview_type">
        <Flex className="type">
          <BiTime className="icon" />
          <div>
            <h4>duration</h4>
            <p>5 days</p>
          </div>
        </Flex>
        <Flex className="type">
          <FaCarSide className="icon" />
          <div>
            <h4>Tour Type</h4>
            <p>Daily Tour</p>
          </div>
        </Flex>
        <Flex className="type">
          <MdPeopleOutline className="icon" />
          <div>
            <h4>group size</h4>
            <p>10 people</p>
          </div>
        </Flex>
        <Flex className="type">
          <MdOutlineGTranslate className="icon" />
          <div>
            <h4>languages</h4>
            <p>english</p>
          </div>
        </Flex>
      </Flex>
      <div className="text">
        <SubHeading title="overview"/>
        <p>Start and end in San Francisco! With the in-depth cultural tour Northern California Summer 2019, you have a 8 day tour package taking you through San Francisco, USA and 9 other destinations in USA. Northern California Summer 2019 includes accommodation as well as an expert guide, meals, transport and more.</p>
      </div>
    </div>
  );
};

export default Overview;
