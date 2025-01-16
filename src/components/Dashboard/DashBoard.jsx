import React from "react";
import CompareAccuracyCards from "./CompareAccuracyCards";
import ResultCards from "./ResultCards";
import PerformanceCards from "./PerformanceCards";

const DashBoard = () => {
  return (
    <div className="mx-auto flex w-8/12 flex-col gap-5">
      <CompareAccuracyCards />
      <ResultCards />
      <PerformanceCards />
    </div>
  );
};

export default DashBoard;
