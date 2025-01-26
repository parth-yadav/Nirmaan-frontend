import * as React from "react";
import { useState } from "react";
import { QuizQuestion } from "./ApprovalPanel/Question";
import QuestionsData from "../ExamPage/QuestionData";
import { ActionButtonGroup } from "./ApprovalPanel/actionButtons/ActionButtonGroup";
import QuestionTileComponent from "./QuestionTileComponent";

export const QuestionPoolApproval: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const currentQuestion = QuestionsData[currentQuestionIndex];

  const handleApprove = () => {
    console.log("Question approved:", currentQuestion.id);
  };

  const handleRequestChanges = () => {
    console.log("Changes requested for question:", currentQuestion.id);
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
          <QuizQuestion
            title={`Question ${currentQuestion.id}`}
            description={currentQuestion.question}
            options={currentQuestion.options}
          />
          <ActionButtonGroup
            onApprove={handleApprove}
            onRequestChanges={handleRequestChanges}
          />
        </main>
      </div>
    </div>
  );
};
