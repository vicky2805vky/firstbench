import DashBoard from "./Dashboard/DashBoard";
import Result from "./Result/Result";

const Body = () => {
  return (
    <div className="flex flex-col gap-5 py-6 md:flex-row md:px-24">
      <Result />
      <DashBoard />
    </div>
  );
};

export default Body;
