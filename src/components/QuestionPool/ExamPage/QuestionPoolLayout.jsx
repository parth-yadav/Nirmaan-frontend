import React, { useState } from "react";
import { Calendar, Edit, Trash2 } from "lucide-react";
import QuestionData from "./QuestionData";
import QuestionForm from "../QuestionForm/QuestionForm";
import Timeline from "../Timeline/Timeline";

const QuestionDataa = QuestionData;

const ActionButton = ({ icon, text, bgColor, onClick }) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 rounded-md  ${bgColor}`}
    onClick={onClick}
  >
    {icon}
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

const ActionButtons = ({
  onPrevious,
  onNext,
  onProposeChanges,
  onDeleteQuestion,
  
}) => {
  const displayEventTimeline = () => {
    setIsTimelineVisible((prev) => !prev);
    console.log("Toggling event timeline");
  };

  
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full text-sm leading-6 text-white">
        <div className="flex gap-5">
          <ActionButton
            icon={<Edit className="w-4 h-4" />}
            text="Propose changes"
            bgColor="bg-slate-900"
            onClick={onProposeChanges}
          />
          <ActionButton
            icon={<Trash2 className="w-4 h-4" />}
            text="Deprecate"
            bgColor="bg-red-800"
            onClick={onDeleteQuestion}
          />
        </div>
        <div className="flex gap-5">
          <ActionButton
            icon={<Calendar className="w-4 h-4" />}
            text="Event Timeline"
            bgColor="bg-slate-900"
            onClick={displayEventTimeline}
          />

          {/* <ActionButton
          icon={<Calendar className="w-4 h-4" />}
          text="Next Question"
          bgColor="bg-slate-900"
          onClick={onNext}
        /> */}
        </div>
      </div>
      {isTimelineVisible && (
        <div className="absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
          <Timeline close = {displayEventTimeline} />
          {/* Add your timeline details here */}
        </div>
      )}
    </>
  );
};

const QuestionTileComponent = ({
  questions,
  currentQuestionIndex,
  onQuestionClick,
}) => {
  return (

    <div className="flex flex-col items-center pt-6 pb-24 w-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100">
      <div className="flex gap-2 items-center">
        <Calendar className="w-[30px] h-[30px]" />
        <div>Question Navigator</div>
      </div>

      <div className="flex justify-center mt-9 w-full px-4">
        <div className="flex flex-wrap gap-4  text-center ">
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

const QuestionContent = ({ question }) => {
  return (
    <section>
      <h2 className="self-start mt-8 text-base font-semibold leading-7 text-black">
        Multiple choice question
      </h2>
      <p className="mt-4 text-base leading-6 text-justify text-black max-md:max-w-full">
        {question.question}
      </p>
      {question.options.map((option, index) => (
        <div
          key={index}
          className={`px-5 py-5 mt-${index === 0 ? "9" : "2.5"} text-base 
          text-black bg-gray-100 rounded-md max-md:max-w-full cursor-pointer 
          hover:bg-gray-200 transition-colors duration-200`}
        >
          {option.text}
        </div>
      ))}
    </section>
  );
};

const QuestionPool = ({
  currentQuestion,
  questionNumber,
  totalQuestions,
  onPrevious,
  onNext,
  onProposeChanges,
  onDeleteQuestion,
  displayEventTimeline
}) => {
  return (
    <div className="flex flex-col font-medium max-md:max-w-full">
      {/* <header className="flex shrink-0 bg-gray-50 h-[50px] max-md:max-w-full" /> */}
      <main className="flex flex-col  mt-8 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
          Question Pool Editor
        </h1>
        <div className="flex gap-5 max-w-full w-[223px]">
          <div className="grow text-base text-black">
            Question {questionNumber} / {totalQuestions}
          </div>
          <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm leading-none text-yellow-700 whitespace-nowrap bg-yellow-200 rounded-md">
            <Calendar className="w-3.5 h-3.5" />
            <div className="self-stretch my-auto">Draft</div>
          </div>
        </div>
        <QuestionContent question={currentQuestion} />
        <ActionButtons
          onPrevious={onPrevious}
          onNext={onNext}
          onProposeChanges={onProposeChanges}
          onDeleteQuestion={onDeleteQuestion}
          displayEventTimeline={displayEventTimeline}
        />
      </main>
    </div>
  );
};

const QuestionPoolLayout = () => {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < QuestionDataa.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleProposeChanges = () => {
    console.log("Propose changes for question:", currentQuestionIndex + 1);
    setShowQuestionForm(true);
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
    // <div className="overflow-hidden bg-white">
    //   <div className="flex gap-5 max-md:flex-col">
    //     <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
    //       <QuestionTileComponent
    //         questions={QuestionDataa}
    //         currentQuestionIndex={currentQuestionIndex}
    //         onQuestionClick={handleQuestionClick}
    //       />
    //     </aside>
    //     <main className="flex flex-col px-8  w-4/5 max-md:ml-0 max-md:w-full">
    //       <QuestionPool
    //         currentQuestion={QuestionDataa[currentQuestionIndex]}
    //         questionNumber={currentQuestionIndex + 1}
    //         totalQuestions={QuestionDataa.length}
    //         onPrevious={handlePreviousQuestion}
    //         onNext={handleNextQuestion}
    //         onProposeChanges={handleProposeChanges}
    //         onDeleteQuestion={handleDeleteQuestion}
    //       />
    //       <hr className="w-full bg-gray-300 mt-8 mb-8 border-0 h-px max-md:max-w-full" />
    //       <div className="mt-8">
    //         <QuestionForm />
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <div className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <QuestionTileComponent
            questions={QuestionDataa}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionClick={handleQuestionClick}
          />
        </aside>
        <main className="flex flex-col   px-8 w-4/5 max-md:ml-0 max-md:w-full">
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
          <hr className="w-full bg-blue-300 mt-8 mb-8 border-0 h-px max-md:max-w-full" />
          {showQuestionForm && (
            <div className="mt-8">
              <QuestionForm
                question={QuestionDataa[currentQuestionIndex]}
                onClose={() => setShowQuestionForm(false)}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default QuestionPoolLayout;
