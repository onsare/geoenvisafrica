import React from "react";
import Slider from "./Slider";
import Hero from "./Hero";
import Accordion from "./Accordion";
import Team from "./Team";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Hero />
      <Accordion />
      <Team />
      <Carousel />
    </div>
  );
};

export default HomePage;
