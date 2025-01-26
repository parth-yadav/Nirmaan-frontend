import type React from "react";
import { Calendar } from "lucide-react";

interface Question {
  id: number;
  // Add other properties as needed
}

interface QuestionTileComponentProps {
  questions: Question[];
  currentQuestionIndex: number;
  onQuestionClick: (index: number) => void;
}

const QuestionTileComponent: React.FC<QuestionTileComponentProps> = ({
  questions,
  currentQuestionIndex,
  onQuestionClick,
}) => {
  return (
    <div className="flex flex-col items-center p-6 w-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100">
      <div className="flex gap-2 items-center">
        <Calendar className="w-[30px] h-[30px]" />
        <div>Question Navigator</div>
      </div>

      <div className="flex justify-center mt-9 w-full ">
        <div className="flex flex-wrap gap-4 pl-2  text-center ">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`px-4 w-10 h-10 cursor-pointer flex items-center justify-center ${
                index === currentQuestionIndex
                  ? "text-white bg-blue-500 rounded-full"
                  : "bg-white rounded-md"
              }`}
              onClick={() => onQuestionClick(index)}
            >
              {question.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionTileComponent;
