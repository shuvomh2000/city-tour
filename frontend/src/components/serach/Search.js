import React from "react";
import { Container, Form } from "react-bootstrap";
import { BiCalendar, BiSolidMap } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Flex from "../layouts/Flex";
import "./search.css";

const Search = () => {
  return (
    <Container>
      <Flex className="search_part">
        <Flex className="search1">
          <BiSolidMap className="search_icon" />
          {/* <h4>Where are you going?</h4> */}
          <div className="select_part">
            <select >
              <option>Where are you going?</option>
              <option value="1">united states</option>
              <option value="2">europe</option>
              <option value="3">asia</option>
            </select>
          </div>
          {/* <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </Flex>
        <Flex className="search2">
          <BiCalendar className="search_icon" />
          <h4>when</h4>
        </Flex>
        <Flex className="search3">
          <IoMdPeople className="search_icon" />
          <h4>guests</h4>
        </Flex>
        <Flex className="search4">
          <AiOutlineDollarCircle className="search_icon" />
          <h4>price</h4>
        </Flex>
        <Flex className="search5">
          <h4>search</h4>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Search;
