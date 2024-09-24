"use client";

import React, { useState } from "react";
import conf from "@/conf/conf";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2 } from "lucide-react";
import SmallComponent from "./smalltxe";
import TinyMCECustomCSS from "./custom_tiny";

interface Option {
  content: string;
}

export default function TestQuestionEditor() {
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([{ content: "" }]);

  const handleQuestionChange = (content: string) => {
    setQuestion(content);
  };

  const handleOptionChange = (index: number, content: string) => {
    const newOptions = [...options];
    newOptions[index] = { content };
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { content: "" }]);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    console.log("Question:", question);
    console.log("Options:", options);
  };

  const commonEditorConfig = {
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
        background-color: #d81b1b;
        border: 2px solid #eee;
        border-radius: 10px;
        box-shadow: none;
        overflow: hidden;
        padding: 4px;
        position: fixed; /* Change to fixed */
        width: 800px;
        z-index: 100;
        top: 0px; /* Position at the top of the viewport */
        /* Adjust this to position horizontally */
      }
      `,
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Create Test Question</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label
            htmlFor="question-editor"
            className="text-lg font-semibold mb-2 block"
          >
            Question
          </Label>
          <div className="border rounded-md p-2 min-h-[100px]">
            <Editor
              id="question-editor"
              apiKey={conf.tinymce}
              init={{
                ...commonEditorConfig,
                placeholder: "Enter your question here...",
              }}
              value={question}
              onEditorChange={handleQuestionChange}
            />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Options</h3>
          {options.map((option, index) => (
            <div key={index} className="mb-4 flex items-start space-x-2">
              <div className="flex-grow border rounded-md p-2 min-h-[50px]">
                <Label htmlFor={`option-editor-${index}`} className="sr-only">
                  Option {index + 1}
                </Label>
                <Editor
                  id={`option-editor-${index}`}
                  apiKey={conf.tinymce}
                  init={{
                    ...commonEditorConfig,
                    placeholder: `Enter option ${index + 1} here...`,
                  }}
                  value={option.content}
                  onEditorChange={(content) =>
                    handleOptionChange(index, content)
                  }
                />
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeOption(index)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove option {index + 1}</span>
              </Button>
            </div>
          ))}
          <Button onClick={addOption} variant="outline" className="mt-2">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Option
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          Submit Question
        </Button>
      </CardFooter>
      <SmallComponent />
      <TinyMCECustomCSS />
    </Card>
  );
}
