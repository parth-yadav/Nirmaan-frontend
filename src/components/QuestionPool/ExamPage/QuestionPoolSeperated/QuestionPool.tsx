import type React from "react";
import { Calendar } from "lucide-react";
import QuestionContent from "./QuestionContent";
import ActionButtons from "./ActionButtons";

interface Question {
  question: string;
  options: { text: string }[];
}

interface QuestionPoolProps {
  currentQuestion: Question;
  questionNumber: number;
  totalQuestions: number;
  onProposeChanges: () => void;
  onDeleteQuestion: () => void;
}

const QuestionPool: React.FC<QuestionPoolProps> = ({
  currentQuestion,
  questionNumber,
  totalQuestions,
  onProposeChanges,
  onDeleteQuestion,
}) => {
  return (
    <div className="flex flex-col font-medium max-md:max-w-full">
      <main className="flex flex-col  mt-8 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
          Question Pool Editor
        </h1>
        <div className="flex gap-5 max-w-full w-[223px]">
          <div className="grow text-base text-black">
            Question {questionNumber} / {totalQuestions}
          </div>
          <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm leading-none text-yellow-700 whitespace-nowrap bg-yellow-200 rounded-lg">
            <Calendar className="w-3.5 h-3.5" />
            <div className="self-stretch my-auto">Draft</div>
          </div>
        </div>
        <QuestionContent question={currentQuestion} />
        <ActionButtons
          onProposeChanges={onProposeChanges}
          onDeleteQuestion={onDeleteQuestion}
        />
      </main>
    </div>
  );
};

export default QuestionPool;
