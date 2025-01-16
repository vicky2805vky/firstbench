import { FaUser } from "react-icons/fa";

const ResultTopScore = () => {
  return (
    <div className="rounded-lg bg-[var(--primary-bg)] p-3">
      <div className="flex gap-5">
        <div className="w-fit rounded bg-[var(--secondary-bg)] p-3 text-xl text-black">
          <FaUser />
        </div>
        <div className="[font-size:var(--fs-xs)]">
          <b>Top Score</b>
          <b className="block">
            <span className="text-xl text-black">230</span>/240
          </b>
        </div>
      </div>
      <div className="my-3 h-[1px] w-full border border-solid"></div>
      <div className="flex items-center justify-between [font-size:var(--fs-xs)]">
        <p>
          By <b className="text-black">Parth Akotkar</b>
        </p>
        <p className="w-fit rounded-full bg-[var(--tag-color)] px-2 uppercase text-white [font-size:var(--fs-xs)]">
          92% Accuracy
        </p>
      </div>
    </div>
  );
};

export default ResultTopScore;
