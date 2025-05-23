import React, { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";

interface Question {
  id: number;
}

interface QuestionTileComponentProps {
  questions: Question[];
  currentQuestionIndex: number;
  onQuestionClick: (index: number) => void;
}

const QuestionTileComponent: React.FC<QuestionTileComponentProps> = ({
  questions,
  currentQuestionIndex,
  onQuestionClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col items-center p-6 w-full h-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100">
      <div className="flex gap-2 items-center w-full">
        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-[30px] h-[30px]" />
        </button>
        <div className="flex gap-2 items-center">
          <Calendar className="w-[30px] h-[30px] hidden lg:block" />
          <div>Question Navigator</div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-100 z-50 lg:hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="flex gap-2 items-center">
              <Calendar className="w-[30px] h-[30px]" />
              <div>Question Navigator</div>
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X className="w-[30px] h-[30px]" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-full">
            <div className="flex flex-wrap gap-4 text-center">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`px-4 w-10 h-10 cursor-pointer flex items-center justify-center ${
                    index === currentQuestionIndex
                      ? "text-white bg-blue-500 rounded-full"
                      : "bg-white rounded-lg"
                  }`}
                  onClick={() => {
                    onQuestionClick(index);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {question.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col  mt-9 w-full h-full">
        <div className="flex flex-wrap gap-4 pl-2 text-center">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`px-4 w-10 h-10 cursor-pointer flex items-center justify-center ${
                index === currentQuestionIndex
                  ? "text-white bg-blue-800 rounded-full"
                  : "bg-white rounded-lg"
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

export default QuestionTileComponent;
