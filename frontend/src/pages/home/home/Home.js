import React from "react";
import Banner from "../banner/Banner";
import Venice from "../venice/Venice";
import SubBanner from "../subBanner/SubBanner";
import Popular from "../popular/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Venice/>
      <SubBanner/>
      <Popular/>
    </>
  );
};

export default Home;
