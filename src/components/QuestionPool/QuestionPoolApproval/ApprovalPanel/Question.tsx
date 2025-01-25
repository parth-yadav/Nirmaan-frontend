import * as React from "react";
import { QuizOption } from "./Option";
import { QuizQuestionProps } from "./types";

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  title,
  description,
  options,
}) => {
  return (
    <div className="flex flex-col text-base font-medium text-black rounded-md">
      <div className="self-start font-semibold leading-7 text-black">
        {title}
      </div>
      <div className="mt-4 w-full leading-6 text-justify max-md:max-w-full">
        {description}
      </div>
      {options.map((option, index) => (
        <QuizOption
          key={index}
          text={option.text}
          isCorrect={option.isCorrect}
        />
      ))}
    </div>
  );
};
