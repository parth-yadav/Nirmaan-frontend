"use client";
import React, { useState } from "react";
import ActionButton from "./ActionButton";
import QuestionsData from "../QuestionPool/ExamPage/QuestionData"; // Import the questions data

const QuestionContent = ({
  currentQuestion,
  onNext,
  onPrevious,
  onFlag,
  onSelectOption,
}: {
  currentQuestion: number;
  onNext: () => void;
  onPrevious: () => void;
  onFlag: () => void;
  onSelectOption: (optionIndex: number) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    onSelectOption(optionIndex); // Notify parent about the selection
  };

  const question = QuestionsData[currentQuestion - 1]; // Get the current question

  return (
    <article className="flex flex-col self-stretch my-auto w-full text-black  max-md:max-w-full">
      <header className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold tracking-normal leading-snug">
            Exam Name of Medium Size Length
          </h2>
          <p className="self-start text-base font-medium">
            Question {currentQuestion} / {QuestionsData.length}
          </p>
        </div>
        <p className="self-start text-lg font-semibold leading-loose">
          Minutes Remaining: 95
        </p>
      </header>

      <p className="self-start mt-8 text-base font-semibold leading-7 text-black">
        Multiple Choice Question
      </p>

      <p className="mt-4 text-xl leading-7 text-justify max-md:max-w-full">
        {question.question}
      </p>

      <div className="mt-8 space-y-2.5">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`flex flex-wrap gap-4 px-5 py-4 text-base font-medium bg-gray-100 rounded-md w-full text-left ${
              selectedOption === index + 1
                ? "border-2 border-blue-600 border-solid"
                : ""
            }`}
            onClick={() => handleOptionSelect(index + 1)}
          >
            <span
              className={`flex shrink-0 self-start rounded-full h-[15px] w-[15px] ${
                selectedOption === index + 1 ? "bg-blue-600" : "bg-white"
              }`}
            />
            <span className="flex-auto max-md:max-w-full">{option.text}</span>
          </button>
        ))}
      </div>

      <footer className="flex flex-wrap gap-5 justify-between mt-96 w-full text-sm font-medium leading-6 text-white max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 whitespace-nowrap">
          <ActionButton
            text="Previous"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7a80720f92b14ca04039237b05a73d5a51b39f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            iconPosition="left"
            onClick={onPrevious}
          />
          <ActionButton
            text="Flag"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8400cefaf73bb91bfa67813802f8b9fb8769f8d0?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            iconPosition="left"
            onClick={onFlag}
          />
          <ActionButton
            text="Next"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/00cf145563e7c1c4b1de13fcf0bc14853cf6c9ab?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            iconPosition="right"
            onClick={onNext}
          />
        </div>
        <div className="flex gap-5">
          <ActionButton
            text="Report"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca024a4c5cfba618c96ca544591d335539775a5?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            iconPosition="left"
            onClick={() => {}}
          />
          <ActionButton
            text="End Test"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4eac5b6905491eee75d2a64010d7ba88688179ab?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            iconPosition="left"
            onClick={() => {}}
          />
        </div>
      </footer>
    </article>
  );
};

export default QuestionContent;
