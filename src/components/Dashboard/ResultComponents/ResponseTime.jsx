import React from "react";
import DashBoardCard from "../DashBoardCard";
import { TbClockExclamation } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";

const ResponseTime = () => {
  return (
    <DashBoardCard Icon={TbClockExclamation} text="Response Time">
      <p className="mb-3 w-fit bg-[var(--btn-color)] px-2 py-[2px] text-[8px] text-white">
        Std Time-2min
      </p>
      <div className="mb-3 flex w-full justify-between gap-3 border border-dashed border-gray-300 bg-gray-100 p-2 text-[10px] [font-weight:500]">
        <div className="flex items-end">
          <p className="text-[22px] text-[var(--tag-color2)] [line-height:1]">
            60
          </p>
          <div className="flex">
            <p>% Ans took</p>
          </div>
        </div>
        <div className="flex items-end">
          <FaArrowUp className="mr-1 self-start text-lg text-red-600" />
          <p className="text-sm text-[var(--tag-color2)]">2</p>
          <p>min</p>
        </div>
      </div>
      <hr />
      <p className="mt-3 text-center text-base font-semibold text-black">
        You are <span className="text-red-600">slow</span>!
      </p>
    </DashBoardCard>
  );
};

export default ResponseTime;
