import React from "react";
import Banner from "../banner/Banner";
import Venice from "../venice/Venice";
import SubBanner from "../subBanner/SubBanner";
import Popular from "../popular/Popular";
import Enjoy from "../enjoy/Enjoy";
import Service from "../service/Service";

const Home = () => {
  return (
    <>
      <Banner />
      <Venice/>
      <SubBanner/>
      <Popular/>
      <Enjoy/>
      <Service/>
    </>
  );
};

export default Home;
