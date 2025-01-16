import React from "react";

const ApproachDataCard = ({ score, basedOn }) => {
  return (
    <div className="flex w-full min-w-max items-end gap-1 border border-solid p-1 text-xs font-semibold text-[#928FBA]">
      <p className="bg-gray-300 px-[3px]">
        {score} <span className="text-[8px]">%</span>
      </p>
      <p className="text-[10px] text-black">Based on</p>
      <p>{basedOn}</p>
    </div>
  );
};

export default ApproachDataCard;
