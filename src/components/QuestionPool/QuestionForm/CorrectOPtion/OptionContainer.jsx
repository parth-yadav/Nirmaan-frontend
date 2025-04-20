import * as React from "react";
import { OptionChip } from "./OptionChip";
import AnswerBadge from "./AnswerBadge";

export const OptionsContainer = () => {
  // State to hold the list of options
  const [options, setOptions] = React.useState([
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
  ]);

  // Function to handle adding a new option
  const handleAddOption = () => {
    const newOption = {
      id: Date.now(), // Generate a unique ID using timestamp
      text: `Option ${options.length + 1}`, // Generate a new option text
    };
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  // Function to handle deleting an option
  const handleDeleteOption = (idToRemove) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== idToRemove)
    );
  };

  return (
    <>
      <div className="mt-6 flex items-center gap-4 max-md:flex-col max-md:items-start">
        {/* Answer Badge */}
        <AnswerBadge
          onClick={handleAddOption} // Pass the add option handler
          className="max-md:w-full max-md:mb-4"
        />

        {/* Options Container */}
        <div className="flex flex-wrap flex-auto gap-2.5 py-2.5 pr-20 pl-4 leading-none rounded-none border border-gray-300 border-solid max-md:w-full">
          {options.map((option) => (
            <OptionChip
              key={option.id}
              text={option.text}
              onDelete={() => handleDeleteOption(option.id)} // Pass the delete handler
            />
          ))}
        </div>
      </div>
    </>
  );
};
