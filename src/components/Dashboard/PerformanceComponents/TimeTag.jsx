import React from "react";

const TimeTag = ({ time, bg = " bg-[var(--secondary-bg)]" }) => {
  return (
    <div className={"z-10 flex w-fit items-end rounded p-1 " + bg}>
      <p className="text-[10px]">{time}</p>
      <p className="text-[8px]">MIN</p>
    </div>
  );
};

export default TimeTag;
