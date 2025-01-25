import type React from "react";

interface Option {
  text: string;
}

interface Question {
  question: string;
  options: Option[];
}

interface QuestionContentProps {
  question: Question;
}

const QuestionContent: React.FC<QuestionContentProps> = ({ question }) => {
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

export default QuestionContent;
