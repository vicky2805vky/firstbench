import React from "react";
import Improvements from "./ResultComponents/Improvements";
import ApproachData from "./ResultComponents/ApproachData";
import ResponseTime from "./ResultComponents/ResponseTime";
import Suggestions from "./ResultComponents/Suggestions";

const ResultCards = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Improvements />
      <ResponseTime />
      <ApproachData />
      <Suggestions />
    </div>
  );
};

export default ResultCards;
