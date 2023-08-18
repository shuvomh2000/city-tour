import React from "react";
import { Accordion } from "react-bootstrap";
import SubHeadings from "../../../components/layouts/subheadings/SubHeadings";
import Flex from "../../../components/layouts/Flex";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./tourDetails.css";

const TourDetails = () => {
  return (
    <>
      <div className="tourdeatils_part">
        <div className="tourdeatils_heading">
          <SubHeadings title="Itinerary" />
        </div>
        <div>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Day 1: Arrive San Francisco</Accordion.Header>
              <Accordion.Body className="dropdown_item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Day 2: San Francisco Sightseeing – Napa
              </Accordion.Header>
              <Accordion.Body className="dropdown_item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Day 3: Lake Tahoe Sightseeing</Accordion.Header>
              <Accordion.Body className="dropdown_item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Day 4: Monterey, Carmel and 17-Mile Drive
              </Accordion.Header>
              <Accordion.Body className="dropdown_item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Day 5: Monterey – Roaring Camp – Depart San Francisco
              </Accordion.Header>
              <Accordion.Body className="dropdown_item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="Includ_part">
        <SubHeadings title="Included/Excluded" />
        <Flex className="Includ_box">
          <div className="Includ_left">
            <p>
              <AiOutlineCheck className="success" />
              Specialized bilingual guide
            </p>
            <p>
              <AiOutlineCheck className="success" />
              Private Transport
            </p>
            <p>
              <AiOutlineCheck className="success" />
              Entrance fees (Cable and car and Moon Valley)
            </p>
            <p>
              <AiOutlineCheck className="success" />
              Box lunch water, banana apple and chocolate
            </p>
          </div>
          <div className="Includ_right">
            <p>
              <RxCross1 className="error" />
              Additional Services
            </p>
            <p>
              <RxCross1 className="error" />
              Insurance
            </p>
            <p>
              <RxCross1 className="error" />
              Drink
            </p>
            <p>
              <RxCross1 className="error" />
              Tickets
            </p>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default TourDetails;
