import React from "react";
import DashBoardCard from "../DashBoardCard";
import { BsGraphUpArrow } from "react-icons/bs";
import ApproachDataCard from "./ApproachDataCard";

const approachDataCardTexts = [
  {
    score: 25,
    basedOn: "Facts",
  },
  {
    score: 32,
    basedOn: "Analysis",
  },
  {
    score: 19,
    basedOn: "Elimination",
  },
  {
    score: 24,
    basedOn: "Guess",
  },
];

const ApproachData = () => {
  return (
    <DashBoardCard Icon={BsGraphUpArrow} text="Approach Data">
      <div className="flex flex-col gap-1">
        {approachDataCardTexts.map((data, i) => {
          return <ApproachDataCard key={i} {...data} />;
        })}
      </div>
    </DashBoardCard>
  );
};

export default ApproachData;
