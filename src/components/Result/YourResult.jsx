import { LuNotepadText } from "react-icons/lu";

const YourResult = () => {
  return (
    <div className="flex justify-between rounded-lg bg-[var(--primary-bg)] p-3">
      <div className="w-fit rounded bg-[var(--secondary-bg)] p-3 text-xl text-black">
        <LuNotepadText />
      </div>
      <div>
        <p className="w-fit rounded-full bg-[var(--btn-color)] px-2 text-[8px] uppercase text-white">
          you've passed
        </p>
        <b className="[font-size:var(--fs-xs)]">
          <span className="text-xl text-black">136</span>/240
        </b>
      </div>
      <div className="border-l- flex flex-col items-center justify-center gap-1 border-solid px-2 [font-size:var(--fs-xs)]">
        <p className="w-fit rounded bg-[var(--tag-color)] p-1 text-white">
          76%
        </p>
        <b className="uppercase text-[var(--tag-color)]">Accuracy</b>
      </div>
    </div>
  );
};

export default YourResult;
