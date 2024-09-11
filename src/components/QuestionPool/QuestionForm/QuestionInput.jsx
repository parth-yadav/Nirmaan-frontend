
import React from "react";

function QuestionInput() {
  return (
    <div className="flex flex-col mt-7 w-full min-h-[126px] max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full rounded-md max-md:max-w-full">
          <label
            htmlFor="questionInput"
            className="self-start font-medium leading-none text-black"
          >
            Question
          </label>
          <textarea
            id="questionInput"
            className="gap-2.5 px-3 pt-2 pb-20 mt-3 leading-none bg-white rounded-md border border-solid border-slate-300 min-h-[101px] text-slate-400 w-[506px] max-md:max-w-full"
            placeholder="Type your message here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;
