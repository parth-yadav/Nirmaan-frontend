"use client";
import * as React from "react";
import Badge from "./Badge";
import QuestionCard from "./QuestionCard";

// Define the question type
interface Question {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  marks: number;
  userSelection: string | null;
  marksObtained: number;
  explanation: string;
  correctOption: string;
}

const TestResult: React.FC = () => {
  // Sample data for the questions
  const questions: Question[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Diam egestas at ipsum imperdiet.",
      options: [
        { id: "A", text: "Option A" },
        { id: "B", text: "Option B" },
        { id: "C", text: "Option C" },
        { id: "D", text: "Option D" },
      ],
      marks: 4,
      userSelection: "A",
      marksObtained: 4,
      explanation: "Explanation for Question 1",
      correctOption: "A",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Diam egestas at ipsum imperdiet.",
      options: [
        { id: "A", text: "Option A" },
        { id: "B", text: "Option B" },
        { id: "C", text: "Option C" },
        { id: "D", text: "Option D" },
      ],
      marks: 4,
      userSelection: "B",
      marksObtained: 0,
      explanation: "Explanation for Question 2",
      correctOption: "C",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="p-5 mx-auto my-0 bg-white max-w-[595px] max-md:max-w-[991px] max-sm:p-2.5 max-sm:max-w-screen-sm">
        <header className="flex flex-col items-center mb-9">
          <Badge text="Nirmann" />
          <h1 className="mt-4 text-base font-medium text-black">
            The medium length test title
          </h1>
          <p className="mt-1 text-xs text-black">Attempt 2 - Result</p>
        </header>

        <section>
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              questionNumber={question.id}
              questionText={question.text}
              options={question.options}
              marks={question.marks}
              userSelection={question.userSelection}
              marksObtained={question.marksObtained}
              explanation={question.explanation}
              correctOption={question.correctOption}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default TestResult;
