
import React from "react";

function MarkingScheme() {
  return (
    <div className="flex flex-wrap gap-2.5">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="flex gap-4 items-center w-full">
          <label className="self-stretch my-auto font-medium text-black">
            Marking scheme :
          </label>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto whitespace-nowrap basis-0 text-slate-900">
            <input
              type="text"
              value="4"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-green-100 rounded-md border border-solid border-slate-300 max-md:pr-5"
              aria-label="Correct answer score"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col whitespace-nowrap text-slate-900">
        <input
          type="text"
          value="1"
          className="self-stretch py-2 pr-14 pl-3 w-full bg-red-100 rounded-md border border-solid border-slate-300 max-md:pr-5"
          aria-label="Incorrect answer score"
        />
      </div>
    </div>
  );
}

export default MarkingScheme;
