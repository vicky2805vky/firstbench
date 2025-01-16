import React from "react";
import DashBoardCard from "../DashBoardCard";
import { BsGraphUpArrow } from "react-icons/bs";
import Tag from "../../Tag";

const tags = [
  {
    text: "Geography",
    color: "bg-[var(--tag-color2)]",
  },
  {
    text: "Politics",
    color: "bg-[#F1B70E]",
  },
  {
    text: "Current Affairs",
    color: "bg-[var(--tag-color2)]",
  },
  {
    text: "General Studies",
    color: "bg-[#991E16]",
  },
  {
    text: "Mathematics",
    color: "bg-[var(--tag-color2)]",
  },
  {
    text: "Social Studies",
    color: "bg-[#C2C8C8]",
  },
  {
    text: "English Literature",
    color: "bg-[#991E16]",
  },
  {
    text: "Indian History",
    color: "bg-[#F1B70E]",
  },
  {
    text: "Economics",
    color: "bg-[var(--tag-color2)]",
  },
];
const Improvements = () => {
  return (
    <DashBoardCard Icon={BsGraphUpArrow} text="Improvements">
      <h5 className="mb-3 text-[11px] text-black">Subject Understanding</h5>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, i) => {
          return <Tag key={i} text={tag.text} color={tag.color} />;
        })}
      </div>
    </DashBoardCard>
  );
};

export default Improvements;
