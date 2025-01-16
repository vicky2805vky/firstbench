import React from "react";
import DashBoardCard from "../DashBoardCard";
import { BsStars } from "react-icons/bs";
import SuggestionsCard from "./SuggestionsCard";

const suggestionsCardData = [
  {
    q1: 1,
    q2: 12,
    time: 40,
    unit: "sec",
    text: "Easy",
    color: "text-green-500",
  },
  {
    q1: 12,
    q2: 32,
    time: 1.5,
    text: "Medium",
    color: "text-orange-500",
  },
  {
    q1: 32,
    q2: 40,
    time: 3,
    text: "Hard",
    color: "text-red-500",
  },
];

const Suggestions = () => {
  return (
    <DashBoardCard Icon={BsStars} text="Suggestions">
      <div className="flex gap-2">
        {suggestionsCardData.map((data) => {
          return <SuggestionsCard {...data} />;
        })}
      </div>
    </DashBoardCard>
  );
};

export default Suggestions;
