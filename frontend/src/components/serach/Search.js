import React, { useState } from "react";
import { BiCalendar, BiSolidMap } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { IoMdPeople } from "react-icons/io";
import {
  AiOutlineDollarCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import Flex from "../layouts/Flex";
// import Btn from "../layouts/Btn";
import DropdownBox from "../layouts/DropdownBox";
import DropdownItem from "../layouts/DropdownItem";
import { DatePicker } from "antd";
import moment from "moment";
// import "antd/dist/antd.css"
import "./search.css";

const Search = () => {
  const { RangePicker } = DatePicker;
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Destination");
  const [dates, setDates] = useState([]);
  const [adults, setAdults] = useState(1);
  console.log(dates);

  const handleAdultIncrement = () => {
    if (adults < 5) setAdults(adults + 1);
  };

  const handleAdultDecrement = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  return (
    <Container>
      <Flex className="search_part">
        <Flex className="search1">
          <BiSolidMap className="search_icon" />
          <h4
            onClick={(e) => {
              setIsActive(!isActive);
            }}
          >
            {selected}
          </h4>
          <DropdownBox
            className="city"
            style={{ display: isActive ? "block" : "none" }}
          >
            <DropdownItem
              href="#"
              className="city_item"
              title="United States"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            />
            <DropdownItem
              href="#"
              className="city_item"
              title="new work"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            />
            <DropdownItem
              href="#"
              className="city_item"
              title="san fransisco"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            />
          </DropdownBox>
        </Flex>
        <Flex className="search2">
          <BiCalendar className="search_icon" />
          <h4>when</h4>
          {/* <RangePicker
            onChange={(e) => {
              setDates(
                e.map((item) => {
                  moment(item).format("DD-MM-YYYY");
                })
              );
            }}
          /> */}
        </Flex>
        <Flex className="search3">
          <IoMdPeople className="search_icon" />
          <div>
            <div>
              <h4>member:<span>{adults}</span> </h4>
            </div>
          </div>
            <div className="guest">
              {/*  */}
              <Flex className="guest_inner">
                <h3>adults</h3>
                <Flex className="guest_count">
                  <AiOutlineMinus
                    onClick={handleAdultDecrement}
                    className="btn"
                  />
                  <h4>{adults}</h4>
                  <AiOutlinePlus
                    onClick={handleAdultIncrement}
                    className="btn"
                  />
                </Flex>
              </Flex>
            </div>
        </Flex>
        <Flex className="search4">
          <AiOutlineDollarCircle className="search_icon" />
          <h4>price</h4>
          <Flex className="price_inner">
              <input type="number" placeholder="min"/>
              <input type="number" placeholder="max"/>
          </Flex>
        </Flex>
        <Flex className="search5">
          <h4>search</h4>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Search;
