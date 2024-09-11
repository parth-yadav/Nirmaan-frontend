
import React from "react";
import QuestionContent from "./QuestionContent";
import ActionButtons from "./ActionButtons";

const QuestionPool = () => {
  return (
    <div className="flex flex-col font-medium max-md:max-w-full">
      <header className="flex shrink-0 bg-gray-50 h-[50px] max-md:max-w-full" />
      <main className="flex flex-col px-12 mt-8 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
          Some Question pool name
        </h1>
        <div className="flex gap-5 max-w-full w-[223px]">
          <div className="grow text-base text-black">Question 12 / 100</div>
          <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm leading-none text-yellow-700 whitespace-nowrap bg-yellow-200 rounded-md">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f51006b1a9b6f34c27f74e0e23b4ada03996020be4675a38faed8c396da6325?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            />
            <div className="self-stretch my-auto">Draft</div>
          </div>
        </div>
        <QuestionContent />
        <ActionButtons />
      </main>
    </div>
  );
};

export default QuestionPool;
