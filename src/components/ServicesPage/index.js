import React from "react";
import GeospatialSolutions from "./Geospatial";
import ICT from "./ICT";
import Environmentalconsultancy from "./Environmentalconsultancy";
import Physicalplanning from "./Physicalplanning";
import RnD from "./RnD";

const Services = () => {
  return (
    <div className="container background-light-grey">
      <GeospatialSolutions />
      <ICT />
      <Environmentalconsultancy />
      <Physicalplanning />
      <RnD />
    </div>
  );
};

export default Services;
