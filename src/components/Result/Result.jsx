import ResultRevisit from "./ResultRevisit";
import ResultScore from "./ResultScore";

const Result = () => {
  return (
    <div className="mx-auto flex w-3/12 min-w-[300px] flex-col gap-5 rounded-xl border border-solid bg-[var(--primary-bg)] p-5 text-[var(--primary-color)]">
      <div className="text-center">
        <img src="/result.png" alt="" className="m-auto w-4/12" />
        <h2 className="text-xl text-[#615F9E] [font-weight:600]">
          Your Result!
        </h2>
        <p className="text-xs">All your insights & details in one place</p>
      </div>
      <ResultScore />
      <ResultRevisit />
    </div>
  );
};

export default Result;
