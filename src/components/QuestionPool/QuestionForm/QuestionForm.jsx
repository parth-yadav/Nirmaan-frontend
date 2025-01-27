import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import conf from "@/conf/conf";
import { OptionsContainer } from "./CorrectOPtion/OptionContainer";
import { ActionBar } from "./ActionBar/ActionBar";

import { QuestionPoolApproval } from "../QuestionPoolApproval/QuestionPoolApproval.tsx";
import { ProposedChanges } from "./Proposed Changes/QuestionChanges";



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
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col text-sm rounded-none"
      >
        <div className="flex overflow-hidden flex-col pb-10 w-full bg-white max-md:max-w-full">
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
          <div className="flex  mt-8">
            <ActionBar />
          </div>
        </div>
      </form>
      <div>
     
        <QuestionPoolApproval />
      </div>
      <div>
        <ProposedChanges />
      </div>
    </>
  );
}

function QuestionType() {
  return (
    <>
      <div className="flex flex-col w-96 max-w-full leading-none">
        <div className="flex gap-4 items-center w-full">
          <label
            htmlFor="questionType"
            className="self-stretch my-auto font-medium text-black"
          >
            Question type
          </label>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400">
            <select
              id="questionType"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5"
            >
              <option>Multi choice question</option>
            </select>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b64f45bafb1f79794b2c4adcec4df51251a683da8772bc3d8065330b08d0925?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain z-10 self-center -mt-7 w-5 aspect-square"
        alt=""
      />
    </>
  );
}

function QuestionInput({ value, onChange }) {
  return (
    <div className="flex flex-col mt-7 w-full min-h-[126px] max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full rounded-md max-md:max-w-full">
          <label
            htmlFor="questionInput"
            className="self-start font-medium  leading-none text-black"
          >
            Question
          </label>
          <div className="text-lg ">
            <Editor
              apiKey={conf.tinymce}
              value={value}
              onEditorChange={onChange}
              init={{
                inline: true,
                menubar: ' insert  format table ',
                plugins: [
                 
                 
                  "link", // Plugin for attachments (files, links, etc.)
                  "image",
                  
                  
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table", // Plugin for table creation
                  
                 
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | " +
                  "link table ", // Added 'link' and 'table' to the toolbar
                content_style: `
      .tox.tox-tinymce-inline .tox-editor-header {
        border: 4px solid #eee;
        border-radius: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        overflow: hidden;
        padding: 16px 4px 4px 4px; /* Added top padding (16px) */
        position: fixed;
        width: 800px;
        z-index: 100;
        top: 0px;
        background-color: white; /* Ensure the background is white for better shadow visibility */
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
        <div className="flex flex-col flex-1  shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400 max-md:max-w-full">
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
                    position: fixed; /* Change to fixed */
                    width: 800px;
                    z-index: 100;
                    top: 0px;
                    
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
      className="flex gap-2 justify-center items-center self-start px-4 py-2 mt-8 font-medium leading-6 text-black bg-gray-300 rounded-md"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67780b15f327e409d60ce48aa25b1e7643442e3925beb62c391feb610d70b2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">Add option</span>
    </button>
  );
}

export default QuestionForm;
