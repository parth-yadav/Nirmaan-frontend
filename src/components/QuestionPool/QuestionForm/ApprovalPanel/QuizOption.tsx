import * as React from "react";
import { QuizOptionProps } from "./types";

export const QuizOption: React.FC<QuizOptionProps> = ({ text, isCorrect }) => {
  return (
    <div
      className={`px-5 py-5 mt-2.5 w-full rounded-lg ${
        isCorrect ? "text-green-900 bg-green-100" : "bg-gray-100"
      } max-md:max-w-full`}
      role="button"
      tabIndex={0}
    >
      {text}
    </div>
  );
};
