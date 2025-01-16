import React from "react";

const SuggestionsCard = ({ q1, q2, time, unit = "min", color, text }) => {
  return (
    <div>
      <p className="mb-3 w-fit text-nowrap bg-[var(--btn-color)] px-2 text-[9px] font-bold text-white">
        Q {`${q1}-${q2}`}
      </p>
      <p className="black mb-3 !w-fit rounded border border-dashed border-gray-300 bg-gray-100 p-2 text-lg text-black [font-weight:500]">
        {time}
        <span className="!text-xs">{unit}</span>
      </p>
      <p className={`text-center ${color}`}>{text}</p>
    </div>
  );
};

export default SuggestionsCard;
