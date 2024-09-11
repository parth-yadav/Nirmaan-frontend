
import React from "react";
import QuestionType from "./QuestionType";
import QuestionInput from "./QuestionInput";
import OptionInput from "./OptionInput";
import AddOptionButton from "./AddOptionButton";

function QuestionForm() {
  const options = [
    { label: "Option 1", id: "option1" },
    { label: "Option 2", id: "option2" },
    { label: "Option 3", id: "option3" },
    { label: "Option 4", id: "option4" },
  ];

  return (
    <form className="flex flex-col text-sm rounded-none">
      <div className="flex overflow-hidden flex-col pb-10 w-full bg-white max-md:max-w-full">
        <QuestionType />
        <QuestionInput />
        {options.map((option) => (
          <OptionInput key={option.id} label={option.label} id={option.id} />
        ))}
        <AddOptionButton />
      </div>
    </form>
  );
}

export default QuestionForm;
