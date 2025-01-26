import * as React from "react";
import { useState } from "react";
import { QuizQuestion } from "./ApprovalPanel/Question";
import QuestionsData from "../ExamPage/QuestionData";
import { ActionButtonGroup } from "./ApprovalPanel/actionButtons/ActionButtonGroup";
import QuestionTileComponent from "../ExamPage/QuestionPoolSeperated/QuestionTileComponent";

export const QuestionPoolApproval: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const quizData = {
    title: "Multiple choice question",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dignissim in cras morbi risus. Et ac vitae neque in. Pellentesque ultrices amet purus risus placerat arcu. Lectus mi sed condimentum at et felis sit morbi nisl. Porttitor in eget in ornare aliquam. Elementum condimentum suscipit purus dignissim. Aliquam volutpat quis enim fermentum odio vitae neque sed. Vitae auctor et nisl adipiscing lacus eget. Turpis neque placerat imperdiet eget.",
    options: [
      { text: "Lorem ipsum dolor sit amet consectetur." },
      { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: true },
      { text: "Lorem ipsum dolor sit amet consectetur." },
      { text: "Lorem ipsum dolor sit amet consectetur." },
    ],
  };

  return (
    <div className="overflow-hidden bg-white">
      <div className="flex max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <QuestionTileComponent
            questions={QuestionsData}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionClick={handleQuestionClick}
          />
        </aside>
        <main className="flex flex-col px-8 w-4/5 max-md:ml-0 max-md:w-full">
          <h1 className="text-3xl">Approval Panel</h1>
          <p>This is a description or header for the approval panel.</p>
          <QuizQuestion {...quizData} />
          <ActionButtonGroup />
        </main>
      </div>
    </div>
  );
};
