
import React from "react";

function QuestionType() {
  return (
    <>
      <div className="flex flex-col w-96 max-w-full leading-none">
        <div className="flex gap-4 items-center w-full">
          <label
            htmlFor="questionType"
            className="self-stretch my-auto font-medium text-black"
          >
            Question type
          </label>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400">
            <select
              id="questionType"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5"
            >
              <option>Multi choice question</option>
            </select>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b64f45bafb1f79794b2c4adcec4df51251a683da8772bc3d8065330b08d0925?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain z-10 self-center -mt-7 w-5 aspect-square"
        alt=""
      />
    </>
  );
}

export default QuestionType;
