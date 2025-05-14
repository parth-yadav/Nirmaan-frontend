import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";
import { OptionsContainer } from "./CorrectOPtion/OptionContainer";
import { ActionBar } from "./ActionBar/ActionBar";

function QuestionForm({ question, onClose }) {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (question) {
      setQuestionText(question.question);
      setOptions(
        question.options.map((option, index) => ({
          label: `Option ${index + 1}`,
          id: `option${index + 1}`,
          text: option.text,
        }))
      );
    }
  }, [question]);

  const addOption = () => {
    const newOptionNumber = options.length + 1;
    const newOption = {
      label: `Option ${newOptionNumber}`,
      id: `option${newOptionNumber}`,
      text: "",
    };
    setOptions([...options, newOption]);
  };

  const handleOptionChange = (id, value) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted question:", { questionText, options });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-sm w-full  ">
      <div className="flex flex-col pb-10 w-full max-md:max-w-full">
        <QuestionType />
        <QuestionInput value={questionText} onChange={setQuestionText} />
        {options.map((option) => (
          <OptionInput
            key={option.id}
            label={option.label}
            id={option.id}
            value={option.text}
            onChange={(value) => handleOptionChange(option.id, value)}
          />
        ))}
        <AddOptionButton onClick={addOption} />
        <OptionsContainer />
        <div className="flex mt-8">
          <ActionBar />
        </div>
      </div>
    </form>
  );
}

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function QuestionType() {
  const [selectedOption, setSelectedOption] = useState("Multi choice question");

  return (
    <div className="flex flex-col w-full max-w-full leading-none">
      {/* Label and Dropdown Container */}
      <div className="flex gap-4 items-center w-full max-md:flex-col max-md:items-start">
        {/* Label */}
        <label
          htmlFor="questionType"
          className="font-medium text-black w-[120px] max-md:w-full max-md:mb-2"
        >
          Question type
        </label>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              id="questionType"
              className="py-2 px-3 w-60 bg-white rounded-lg border border-solid border-slate-300 text-left max-md:text-sm max-md:w-full"
            >
              {selectedOption}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start" // Aligns the dropdown menu with the trigger button
            className="w-[100%] min-w-[240px] max-md:w-full" // Matches the width of the trigger button
          >
            <DropdownMenuItem
              onClick={() => setSelectedOption("Multi choice question")}
              className="text-sm cursor-pointer w-full px-3 py-2"
            >
              Multi choice question
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedOption("Single choice question")}
              className="text-sm cursor-pointer w-full px-3 py-2"
            >
              Single choice question
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedOption("Open-ended question")}
              className="text-sm cursor-pointer w-full px-3 py-2"
            >
              Open-ended question
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function QuestionInput({ value, onChange }) {
  return (
    <div className="flex flex-col mt-7 w-full min-h-[126px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label
          htmlFor="questionInput"
          className="self-start font-medium leading-none text-black"
        >
          Question
        </label>
        <div className="text-lg">
          <Editor
            apiKey={conf.tinymce}
            value={value}
            onEditorChange={onChange}
            init={{
              inline: true,
              menubar: "insert format table",
              plugins: [
                "link",
                "image",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | " +
                "link table",
              content_style: `
                .tox.tox-tinymce-inline .tox-editor-header {
                  border: 1px solid #eee;
                  border-radius: 10px;
                  box-shadow: none;
                  overflow: hidden;
                  padding: 4px;
                  position: static; /* Changed from fixed */
                  width: 100%; /* Changed from 800px */
                  z-index: 100;
                  background-color: white;
                }
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function OptionInput({ label, id, value, onChange }) {
  return (
    <div className="flex flex-col mt-5 w-full leading-none max-md:max-w-full">
      <div className="flex gap-4 items-center w-full max-md:flex-wrap max-md:max-w-full">
        <label
          htmlFor={id}
          className="self-stretch my-auto font-medium text-black w-[84px] max-md:w-full"
        >
          {label}
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400 max-md:min-w-full">
          <div className="text-lg">
            <Editor
              apiKey={conf.tinymce}
              value={value}
              onEditorChange={onChange}
              init={{
                inline: true,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | help",
                content_style: `
                  .tox.tox-tinymce-inline .tox-editor-header {
                    border: 1px solid #eee;
                    border-radius: 10px;
                    box-shadow: none;
                    overflow: hidden;
                    padding: 4px;
                    position: static; /* Changed from fixed */
                    width: 100%; /* Changed from 800px */
                    z-index: 100;
                    background-color: white;
                  }
                `,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AddOptionButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-2 justify-center items-center self-start px-4 py-1.5 mt-8 font-medium text-black bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors duration-200 max-md:px-6 max-md:py-2 max-md:text-base"
    >
      {/* Icon */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67780b15f327e409d60ce48aa25b1e7643442e3925beb62c391feb610d70b2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 w-4 h-4"
        alt="Add option"
      />
      {/* Text */}
      <span className="text-center">Add option</span>
    </button>
  );
}

export default QuestionForm;
