
import React from "react";
import Button from "./Button";
import TagInput from "./TagInput";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { useDispatch, useSelector } from "react-redux";

function NewBlogForm ()  {
  
  

  return (
    <form className="flex flex-col text-sm rounded-none max-w-[600px]">
      <div className="flex flex-col pt-8 w-full bg-white pb-[505px] shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col px-8 w-full leading-none max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <header className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-blue-800 max-md:max-w-full">
              <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-blue-200 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef55ccdd3accc64047fbb5bc53a0ec0e5fc529d8941322c8a2c4264b892010e?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                />
                <span className="self-stretch my-auto">New Blogggg</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </header>
            <TextInput label="Title" placeholder="Blog Title" />
            <Button
              text="New Blog"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a65288dda74d6ab04a7e48d2f98079c3c5a0df0bdd4c38c9688bb88845d8b0?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="self-end -mt-10"
            />
            <TextArea
              label="Description"
              placeholder="Blog description goes here"
              helperText="The title and description will be used for SEO purposes."
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
          />
        </div>
        <div className="flex z-10 flex-col items-start px-8 mt-0 mb-0 w-full font-medium max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
          <TagInput
            label="Tags"
            placeholder="Search for tags here"
            helperText="Tags helps in SEO and works as keywords"
          />
          <Button
            text="Createee"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bbe9c09371a8e0a8dcc1f5c85441300ca8b19101919595d90572d08c724596ff?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="mt-10"
          />
        </div>
      </div>
    </form>
  );
};

export default NewBlogForm;
