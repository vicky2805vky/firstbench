import { CgChevronDownR } from "react-icons/cg";
import DashBoardCard from "./DashBoardCard";

const CompareAccuracyCards = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <DashBoardCard
        text="Compare Accuracy"
        Icon={CgChevronDownR}
        className="!h-[250px] min-w-[200px]"
      />
      <DashBoardCard
        text="Compare Accuracy"
        Icon={CgChevronDownR}
        className="!h-[250px] min-w-[200px]"
      />
      <DashBoardCard
        text="Compare Accuracy"
        Icon={CgChevronDownR}
        className="!h-[250px] min-w-[200px]"
      />
    </div>
  );
};

export default CompareAccuracyCards;
