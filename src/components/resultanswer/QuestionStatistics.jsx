
import React from "react";

const statistics = [
  { color: "bg-white", text: "Total number of questions: 50" },
  { color: "bg-white", text: "Number of questions attempted: 50" },
  { color: "bg-green-400", text: "Number of correct answers: 50" },
  { color: "bg-red-600", text: "Number of wrong answers: 50" },
  { color: "bg-indigo-500", text: "Number of questions left: 50" },
];

function QuestionStatistics() {
  return (
    <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-base font-medium text-black max-md:mt-10">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex gap-2.5 px-4 py-2.5 bg-white rounded-lg shadow-sm"
          >
            <div
              className={`flex-1 shrink-0 ${stat.color} rounded-full ${
                stat.color === "bg-white"
                  ? "border border-solid border-neutral-600"
                  : ""
              } h-[19px] stroke-[1px]`}
            />
            <div>{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionStatistics;
