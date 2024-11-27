import React, { useState } from "react";
import { Calendar, Edit, Trash2 } from "lucide-react";
import QuestionData from "./QuestionData";

const QuestionDataa = QuestionData;

// ... (Keep the ActionButton and ActionButtons components as they are)

const QuestionTileComponent = ({
  questions,
  currentQuestionIndex,
  onQuestionClick,
}) => {
  // ... (Keep this component as it is)
};

const QuestionContent = ({ question }) => { 
  // ... (Keep this component as it is)
};

const QuestionPool = ({
  currentQuestion,
  questionNumber,
  totalQuestions,
  onPrevious,
  onNext,
  onProposeChanges,
  onDeleteQuestion,
}) => {
  // ... (Keep this component as it is)
};

function QuestionForm({ questionData }) {
  const [options, setOptions] = useState(
    questionData
      ? questionData.options.map((opt, index) => ({
          label: `Option ${index + 1}`,
          id: `option${index + 1}`,
          value: opt.text,
        }))
      : [
          { label: "Option 1", id: "option1", value: "" },
          { label: "Option 2", id: "option2", value: "" },
          { label: "Option 3", id: "option3", value: "" },
          { label: "Option 4", id: "option4", value: "" },
        ]
  );

  const [questionText, setQuestionText] = useState(questionData ? questionData.question : "");

  const addOption = () => {
    const newOptionNumber = options.length + 1;
    const newOption = {
      label: `Option ${newOptionNumber}`,
      id: `option${newOptionNumber}`,
      value: "",
    };
    setOptions([...options, newOption]);
  };

  return (
    <form className="ml-8 flex flex-col text-sm rounded-none">
      <div className="flex overflow-hidden flex-col pb-10 w-full bg-white max-md:max-w-full">
        <QuestionType />
        <QuestionInput value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
        {options.map((option) => (
          <OptionInput
            key={option.id}
            label={option.label}
            id={option.id}
            value={option.value}
            onChange={(e) => {
              const updatedOptions = options.map(opt =>
                opt.id === option.id ? { ...opt, value: e.target.value } : opt
              );
              setOptions(updatedOptions);
            }}
          />
        ))}
        <AddOptionButton onClick={addOption} />
      </div>
    </form>
  );
}

function QuestionType() {
  // ... (Keep this component as it is)
}

function QuestionInput({ value, onChange }) {
  return (
    <div className="flex flex-col mt-7 w-full min-h-[126px] max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full rounded-md max-md:max-w-full">
          <label
            htmlFor="questionInput"
            className="self-start font-medium leading-none text-black"
          >
            Question
          </label>
          <textarea
            id="questionInput"
            className="gap-2.5 px-3 pt-2 pb-20 mt-3 leading-none bg-white rounded-md border border-solid border-slate-300 min-h-[101px] text-slate-400 w-[506px] max-md:max-w-full"
            placeholder="Type your message here"
            value={value}
            onChange={onChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function OptionInput({ label, id, value, onChange }) {
  return (
    <div className="flex flex-col mt-5 w-full leading-none max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <label
          htmlFor={id}
          className="self-stretch my-auto font-medium text-black w-[84px]"
        >
          {label}
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400 max-md:max-w-full">
          <input
            type="text"
            id={id}
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            placeholder="Add value"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

function AddOptionButton({ onClick }) {
  // ... (Keep this component as it is)
}

const QuestionPoolLayout = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    setIsEditing(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < QuestionDataa.length - 1 ? prevIndex + 1 : prevIndex
    );
    setIsEditing(false);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    setIsEditing(false);
  };

  const handleProposeChanges = () => {
    setIsEditing(true);
  };

  const handleDeleteQuestion = () => {
    console.log("Delete question:", currentQuestionIndex + 1);
    // Implement the logic for deleting a question here
  };

  const displayEventTimeline = () => {
    // Implement the logic for displaying the event timeline here
    console.log("Displaying event timeline");
  };

  return (
    <div className="overflow-hidden bg-blue-300">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <QuestionTileComponent
            questions={QuestionDataa}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionClick={handleQuestionClick}
          />
        </aside>
        <main className="flex flex-col px-8  w-4/5 max-md:ml-0 max-md:w-full">
          {!isEditing ? (
            <QuestionPool
              currentQuestion={QuestionDataa[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={QuestionDataa.length}
              onPrevious={handlePreviousQuestion}
              onNext={handleNextQuestion}
              onProposeChanges={handleProposeChanges}
              onDeleteQuestion={handleDeleteQuestion}
              displayEventTimeline={displayEventTimeline}
            />
          ) : (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Propose Changes</h2>
              <QuestionForm questionData={QuestionDataa[currentQuestionIndex]} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default QuestionPoolLayout;
