
import React from "react";

const QuestionButton = ({ number, bgColor }) => (
  <div className="flex flex-col flex-1 justify-center">
    <div
      className={`justify-center items-center px-3 w-10 h-10 ${bgColor} rounded-md`}
    >
      {number.toString().padStart(2, "0")}
    </div>
  </div>
);

const QuestionPalette = () => {
  const questions = [
    {
      numbers: [1, 2, 3, 4],
      colors: ["bg-green-400", "bg-green-400", "bg-sky-100", "bg-green-400"],
    },
    {
      numbers: [5, 6, 7, 8],
      colors: ["bg-yellow-200", "bg-green-400", "bg-green-400", "bg-green-400"],
    },
    {
      numbers: [9, 10, 11, 12],
      colors: ["bg-sky-100", "bg-fuchsia-300", "bg-yellow-200", "bg-green-400"],
    },
    {
      numbers: [13, 14, 15, 16],
      colors: ["bg-green-400", "bg-sky-100", "bg-green-400", "bg-green-400"],
    },
    {
      numbers: [17, 18, 19, 20],
      colors: ["bg-green-400", "bg-sky-100", "bg-white", "bg-white"],
    },
    {
      numbers: [21, 22, 23, 24],
      colors: ["bg-white", "bg-white", "bg-white", "bg-white"],
    },
  ];

  return (
    <div>
      <h2 className="justify-center mt-14 text-xl tracking-wider uppercase text-neutral-600 max-md:mt-10">
        Question Pallete
      </h2>
      {questions.map((row, index) => (
        <div
          key={index}
          className="flex gap-5 mt-5 uppercase whitespace-nowrap"
        >
          {row.numbers.map((number, idx) => (
            <QuestionButton
              key={number}
              number={number}
              bgColor={row.colors[idx]}
            />
          ))}
        </div>
      ))}
      <button className="justify-center px-12 py-5 mt-96 text-xl text-white uppercase bg-blue-600 rounded-lg max-md:px-5 max-md:mt-10">
        SUBMIT TEST
      </button>
    </div>
  );
};

export default QuestionPalette;
