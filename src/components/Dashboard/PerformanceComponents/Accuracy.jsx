import React from "react";
import DashBoardCard from "../DashBoardCard";
import { LuRepeat2 } from "react-icons/lu";
import TimeTag from "./TimeTag";

const Accuracy = () => {
  return (
    <DashBoardCard
      Icon={LuRepeat2}
      text={"Compare Accuracy"}
      className="min-w-[250px]"
    >
      <div className="mt-5 flex h-full flex-col gap-3">
        <div className="relative mx-auto flex w-8/12 scale-90 items-center justify-around">
          <div className="absolute h-2 w-full bg-[#26b5b155]"></div>
          <TimeTag time={10} />
          <TimeTag time={15} bg=" bg-[var(--tag-color2)] text-white" />
          <TimeTag time={30} />
          <TimeTag time={45} />
        </div>
        <div>
          <img
            src="/graph.jpg"
            className="pointer-events-none mx-auto"
            alt=""
          />
        </div>
      </div>
    </DashBoardCard>
  );
};

export default Accuracy;
