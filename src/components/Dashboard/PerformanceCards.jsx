import React from "react";
import Accuracy from "./PerformanceComponents/Accuracy";
import TimeTaken from "./PerformanceComponents/TimeTaken";

const PerformanceCards = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Accuracy />
      <TimeTaken />
    </div>
  );
};

export default PerformanceCards;
