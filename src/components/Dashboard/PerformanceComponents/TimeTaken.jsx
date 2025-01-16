import React from "react";
import DashBoardCard from "../DashBoardCard";
import { TbTimelineEventExclamation } from "react-icons/tb";

const TimeTaken = () => {
  return (
    <DashBoardCard
      Icon={TbTimelineEventExclamation}
      text={"Time Taken"}
      className="min-w-[250px]"
    >
      <div className="flex flex-col gap-3 text-[10px]">
        <div>
          <img src="/scale1.jpg" alt="" className="pointer-events-none" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <img src="/scale2.jpg" alt="" className="pointer-events-none" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </DashBoardCard>
  );
};

export default TimeTaken;
