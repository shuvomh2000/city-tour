import React from "react";
import Banner from "../banner/Banner";
import Venice from "../venice/Venice";
import SubBanner from "../subBanner/SubBanner";
import Popular from "../popular/Popular";
import Enjoy from "../enjoy/Enjoy";
import Services from "../services/Services";
import Activitys from "../activitys/Activitys"
import Recent from "../recent/Recent";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Venice/>
      <SubBanner/>
      <Popular/>
      <Enjoy/>
      <Services/>
      <Activitys/>
      <Testimonial/>
      <Recent/>
    </>
  );
};

export default Home;
