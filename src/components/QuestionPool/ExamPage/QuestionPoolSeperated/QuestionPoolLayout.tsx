import type React from "react"
import { useState } from "react"
import QuestionData from "../QuestionData"
import QuestionForm from "../../QuestionForm/QuestionForm"
import QuestionTileComponent from "./QuestionTileComponent"
import QuestionPool from "./QuestionPool"

const QuestionPoolLayout: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showQuestionForm, setShowQuestionForm] = useState(false)

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index)
  }

  const handleProposeChanges = () => {
    console.log("Propose changes for question:", currentQuestionIndex + 1)
    setShowQuestionForm(true)
  }

  const handleDeleteQuestion = () => {
    console.log("Delete question:", currentQuestionIndex + 1)
    // Implement the logic for deleting a question here
  }

  return (
    <div className="overflow-hidden bg-white">
      <div className="flex  max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <QuestionTileComponent
            questions={QuestionData}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionClick={handleQuestionClick}
          />
        </aside>
        <main className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full md:mx-8">
          <QuestionPool
            currentQuestion={QuestionData[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QuestionData.length}
            onProposeChanges={handleProposeChanges}
            onDeleteQuestion={handleDeleteQuestion}
          />
          <hr className="w-full bg-blue-300 mt-8 mb-8 border-0 h-px max-md:max-w-full" />
          {showQuestionForm && (
            <div className="mt-8">
              <QuestionForm
                question={QuestionData[currentQuestionIndex]}
                onClose={() => setShowQuestionForm(false)}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default QuestionPoolLayout

