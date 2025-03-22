import * as React from "react";
import { OptionProps } from "./types";

export const QuestionOption: React.FC<OptionProps> = ({ text, isCorrect }) => {
  const bgColor = isCorrect ? "bg-green-100 text-green-900" : "bg-gray-100";

  return (
    <div
      className={`px-5 py-5 mt-2.5 w-full ${bgColor} rounded-lg max-md:max-w-full`}
    >
      {text}
    </div>
  );
};
