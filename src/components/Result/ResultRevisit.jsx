import React from "react";
import { MdInfoOutline } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";

const ResultRevisit = () => {
  return (
    <div className="flex flex-col gap-0 rounded-xl bg-white p-5">
      <h3 className="text-lg font-bold text-black">Revisit Paper</h3>
      <p className="text-xs">
        Challenge your friends by simply sharing a link to this test
      </p>
      <button className="mx-auto my-5 flex w-[80%] items-center justify-center gap-2 rounded-md bg-[var(--btn-color)] p-1 text-white">
        <TbFileImport />
        Visit
      </button>
      <div className="flex gap-2">
        <MdInfoOutline />
        <p className="[font-size:var(--fs-xs)]">
          Instructions for how to upload your handwritten material in given
        </p>
      </div>
    </div>
  );
};

export default ResultRevisit;
