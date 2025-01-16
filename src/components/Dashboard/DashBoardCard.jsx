import React from "react";

const DashBoardCard = ({ Icon, text, children, className = "" }) => {
  return (
    <div
      className={`flex flex-1 flex-col items-start gap-2 rounded-lg border border-solid bg-white p-2 text-[13px] text-[var(--primary-color)] ${className}`}
    >
      <div className="flex gap-2">
        <Icon className="text-sm" />
        <p>{text}</p>
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default DashBoardCard;
