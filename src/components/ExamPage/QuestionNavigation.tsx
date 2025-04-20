import React from "react";
import QuestionsData from "../QuestionPool/ExamPage/QuestionData"; // Import the questions data

const QuestionNavigation = ({
  currentQuestion,
  completedQuestions,
  flaggedQuestions,
  setCurrentQuestion,
}: {
  currentQuestion: number;
  completedQuestions: number[];
  flaggedQuestions: number[];
  setCurrentQuestion: (questionNumber: number) => void;
}) => {
  const renderQuestionGrid = () => {
    const rows = Math.ceil(QuestionsData.length / 5); // Calculate rows based on total questions
    const cols = 5; // Fixed columns
    const grids = [];

    for (let row = 0; row < rows; row++) {
      const buttons = [];
      for (let col = 0; col < cols; col++) {
        const questionNumber = row * cols + col + 1;

        // Stop rendering if we exceed the total number of questions
        if (questionNumber > QuestionsData.length) break;

        // Determine button class based on question state
        let buttonClass = "px-4 w-10 h-10 bg-white rounded-lg";

        if (completedQuestions.includes(questionNumber)) {
          buttonClass = "px-4 w-10 h-10 bg-sky-300 rounded-lg";
        } else if (flaggedQuestions.includes(questionNumber)) {
          buttonClass = "px-4 w-10 h-10 bg-yellow-300 rounded-lg";
        } else if (currentQuestion === questionNumber) {
          buttonClass = "px-4 w-10 h-10 text-white bg-black rounded-full";
        }

        buttons.push(
          <button
            key={questionNumber}
            className={buttonClass}
            onClick={() => setCurrentQuestion(questionNumber)}
          >
            {questionNumber}
          </button>
        );
      }

      grids.push(
        <div key={row} className="flex gap-4 mt-4 text-center first:mt-9">
          {buttons}
        </div>
      );
    }

    return grids;
  };

  return (
    <section
      className="flex flex-col px-5 py-6 mx-auto w-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100 h-screen max-md:h-auto"
      style={{ height: "100vh" }}
    >
      {/* Header */}
      <div className="flex gap-1 self-start mb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58a1b0249cea22a5716c6d7b6ce91d48f559d961?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt="Nirmaan Logo"
          className="object-contain shrink-0 aspect-square w-[30px]"
        />
        <h1 className="my-auto">Nirmaan</h1>
      </div>

      {/* Question Grid */}
      <div className="flex-grow overflow-y-auto">{renderQuestionGrid()}</div>
    </section>
  );
};

export default QuestionNavigation;
