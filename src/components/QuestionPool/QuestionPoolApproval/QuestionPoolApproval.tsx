import * as React from "react";
import { QuizQuestion } from "./ApprovalPanel/Question";
import { ActionButtonGroup } from "./ApprovalPanel/actionButtons/ActionButtonGroup";

export const QuestionPoolApproval: React.FC = () => {
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
    <>
      <div className="my-6">
        <h1 className="text-3xl">Approval Panelaaa</h1>
        <p>This is a description or header for the approval panel.</p>
        <QuizQuestion {...quizData} />
        <ActionButtonGroup />
      </div>
    </>
  );
};
