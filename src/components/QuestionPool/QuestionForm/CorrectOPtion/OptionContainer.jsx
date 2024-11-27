import * as React from "react";
import { OptionChip } from "./OptionChip";
import AnswerBadge from "./AnswerBadge";

export const OptionsContainer = () => {
  const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
  ];

    return (
      <>
        <div className=" mt-6 flex items-center gap-4">
          <AnswerBadge />
          <div className="flex flex-wrap flex-auto gap-2.5 py-2.5 pr-20 pl-4 leading-none rounded-none border border-gray-300 border-solid ">
            {options.map((option) => (
              <OptionChip key={option.id} text={option.text} />
            ))}
          </div>
        </div>
      </>
    );
};
