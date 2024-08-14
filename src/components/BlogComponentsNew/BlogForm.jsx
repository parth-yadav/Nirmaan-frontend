
import React from "react";
import TagInput from "./TagInput";
import Tag from "./Tag";
import Button from "./Button";

function BlogForm() {
  const tags = [
    { id: 1, text: "Tag1" },
    { id: 2, text: "Some other tag" },
  ];

  return (
    <form className="flex flex-col text-sm rounded-none max-w-[600px]">
      <section className="flex flex-col pt-8 w-full bg-white pb-[505px] shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col px-8 w-full leading-none max-md:px-5 max-md:max-w-full">
          <header className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-blue-800 max-md:max-w-full">
              <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-blue-200 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef55ccdd3accc64047fbb5bc53a0ec0e5fc529d8941322c8a2c4264b892010e?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  alt=""
                />
                <span className="self-stretch my-auto">New Blog</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 w-6 aspect-square"
                alt=""
              />
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <label htmlFor="blogTitle" className="font-medium text-slate-900">
                Title
              </label>
              <div className="flex gap-2 items-start mt-1.5 w-full text-slate-400 max-md:max-w-full">
                <input
                  id="blogTitle"
                  type="text"
                  className="flex-1 py-2 px-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:max-w-full"
                  placeholder="Blog Title"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col items-start w-full rounded-md max-md:max-w-full">
                  <label
                    htmlFor="blogDescription"
                    className="font-medium leading-none text-black"
                  >
                    Description
                  </label>
                  <textarea
                    id="blogDescription"
                    className="gap-2.5 self-stretch px-3 pt-2 pb-14 mt-1.5 bg-white rounded-md border border-solid border-slate-300 min-h-[80px] text-slate-400 w-[506px] max-md:max-w-full"
                    placeholder="Blog description goes here"
                  ></textarea>
                  <p className="mt-1.5 text-slate-500">
                    The title and description will be used for SEO purposes.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
            alt=""
          />
        </div>
        <div className="flex z-10 flex-col items-start px-8 mt-0 mb-0 w-full font-medium max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
          <TagInput />
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Tag key={tag.id} text={tag.text} />
            ))}
          </div>
          <Button
            text="Create"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bbe9c09371a8e0a8dcc1f5c85441300ca8b19101919595d90572d08c724596ff?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          />
        </div>
      </section>
    </form>
  );
}

export default BlogForm;
