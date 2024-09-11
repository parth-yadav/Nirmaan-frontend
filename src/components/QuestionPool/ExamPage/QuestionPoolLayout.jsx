
import React from "react";
import Calendar from "./Calendar";
import QuestionPool from "./QuestionPool";

const QuestionPoolLayout = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <Calendar />
        </aside>
        <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <QuestionPool />
        </main>
      </div>
    </div>
  );
};

export default QuestionPoolLayout;
