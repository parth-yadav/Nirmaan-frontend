import React from "react";

interface Option {
  id: string;
  text: string;
}

interface QuestionCardProps {
  questionNumber: number;
  questionText: string;
  options: Option[];
  marks: number;
  userSelection: string | null;
  marksObtained: number;
  explanation: string;
  correctOption: string; // Added correctOption prop
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  questionText,
  options,
  marks,
  userSelection,
  marksObtained,
  explanation,
  correctOption,
}) => {
  return (
    <article className="p-2.5 mb-8 bg-white rounded-xl border border-solid border-zinc-300 w-[535px] max-sm:mb-5 max-sm:w-full">
      <header className="flex justify-between mb-2.5">
        <h2 className="text-xs font-semibold text-black">
          Question {questionNumber}
        </h2>
        <p className="text-xs font-semibold text-black">{marks} Marks</p>
      </header>

      <p className="mb-2.5 text-xs text-justify text-black">{questionText}</p>

      <div className="mb-5">
        {options.map((option) => {
          const isSelected = userSelection === option.id;
          const isCorrect = option.id === correctOption;

          let optionClass = "px-2.5 py-1.5 mb-2 rounded-lg text-xs text-justify text-black";
          if (isSelected && isCorrect) {
            optionClass += " bg-green-200 text-green-800"; // Correct selection
          } else if (isSelected && !isCorrect) {
            optionClass += " bg-red-200 text-red-800"; // Incorrect selection
          } else if (!isSelected && isCorrect) {
            optionClass += " bg-green-200 text-green-800"; // Correct option (not selected)
          }

          return (
            <div key={option.id} className={optionClass}>
              {option.id}) {option.text}
            </div>
          );
        })}
      </div>

      <div className="mx-0 my-2.5 h-px bg-zinc-300" />

      <div className="flex justify-between px-px py-0">
        <p className="text-xs font-semibold text-black">
          Your Selection: {userSelection || "None"}
        </p>
        <p className="text-xs font-semibold text-black">
          Marks Obtained: {marksObtained}
        </p>
      </div>

      <div className="mx-0 my-2.5 h-px bg-zinc-300" />

      <footer className="px-px py-0">
        <h3 className="mb-2.5 text-xs font-semibold text-black">Explanation</h3>
        <p className="text-xs text-justify text-black">{explanation}</p>
      </footer>
    </article>
  );
};

export default QuestionCard;
