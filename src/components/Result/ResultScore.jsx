import ResultPractice from "./ResultPractice";
import ResultTopScore from "./ResultTopScore";
import YourResult from "./YourResult";

const ResultScore = () => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
      <YourResult />
      <ResultTopScore />
      <ResultPractice />
    </div>
  );
};

export default ResultScore;
