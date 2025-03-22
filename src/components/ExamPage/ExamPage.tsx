import React, { useState } from "react";
import QuestionsData from "../QuestionPool/ExamPage/QuestionData"; // Import the questions data
import QuestionContent from "./QuestionContent";
import QuestionNavigation from "./QuestionNavigation";

function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false); // Controls navigation visibility

  // Handle selecting an option
  const handleOptionSelect = (optionIndex: number) => {
    if (!completedQuestions.includes(currentQuestion)) {
      setCompletedQuestions([...completedQuestions, currentQuestion]);
    }
  };

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestion < QuestionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Flag the current question
  const handleFlag = () => {
    if (flaggedQuestions.includes(currentQuestion)) {
      setFlaggedQuestions(
        flaggedQuestions.filter((q) => q !== currentQuestion)
      );
    } else {
      setFlaggedQuestions([...flaggedQuestions, currentQuestion]);
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        {/* Navigation Section */}
        <div className="w-[21%] max-md:w-full">
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="p-2 w-full bg-gray-200 rounded-md max-md:block md:hidden"
            onClick={() => setIsNavigationOpen(!isNavigationOpen)}
          >
            ☰ Question Navigation
          </button>

          {/* Full-Screen Navigation for Mobile */}
          {isNavigationOpen && (
            <div className="fixed inset-0 z-50 bg-gray-100 overflow-y-auto">
              <button
                className="absolute top-4 right-4 p-2 bg-gray-300 rounded-md"
                onClick={() => setIsNavigationOpen(false)}
              >
                Close
              </button>
              <QuestionNavigation
                currentQuestion={currentQuestion}
                completedQuestions={completedQuestions}
                flaggedQuestions={flaggedQuestions}
                setCurrentQuestion={(q) => {
                  setCurrentQuestion(q);
                  setIsNavigationOpen(false); // Close navigation after selecting a question
                }}
              />
            </div>
          )}

          {/* Always Visible Navigation for Desktop */}
          <div className="hidden md:block">
            <QuestionNavigation
              currentQuestion={currentQuestion}
              completedQuestions={completedQuestions}
              flaggedQuestions={flaggedQuestions}
              setCurrentQuestion={setCurrentQuestion}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="px-4 w-[79%] max-md:ml-0 max-md:w-full">
          <QuestionContent
            currentQuestion={currentQuestion}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onFlag={handleFlag}
            onSelectOption={handleOptionSelect}
          />
        </div>
      </div>
    </main>
  );
}

export default ExamPage;
