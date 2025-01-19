
import React from "react";
import TagInput from "./TagInput";
import Tag from "./Tag";
// import Button from "./Button";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import CloseBotton from "./CloseBotton";

function BlogNewForm() {
  const tags = [
    { id: 1, text: "Tag1" },
    { id: 2, text: "Some other tag" },
  ];

  const isVisible = useSelector((state) => state.blogNewEditor.isVisible);

  if (!isVisible) {
    return null;
  }

 
  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-xl z-50 flex justify-center">
      <div className="p-4 max-w-[600px] w-full h-full rounded-l-lg overflow-auto">
        <form className="flex flex-col text-sm rounded-none w-full">
          <section className="flex flex-col pt-8 w-full bg-white shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] pb-8 rounded-md">
            <div className="flex flex-col px-8 leading-none">
              <header className="flex flex-col w-full">
                <div className="flex flex-wrap gap-5 justify-between font-medium leading-none text-blue-800">
                  <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-blue-200 rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef55ccdd3accc64047fbb5bc53a0ec0e5fc529d8941322c8a2c4264b892010e?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                      className="object-contain w-3.5 aspect-square"
                      alt=""
                    />
                    <span>New Blog</span>
                  </div>
                  <CloseBotton />
                </div>
                <div className="flex flex-col mt-8 w-full">
                  <label
                    htmlFor="blogTitle"
                    className="font-medium text-slate-900"
                  >
                    Title
                  </label>
                  <div className="flex gap-2 items-start mt-1.5 text-slate-400">
                    <input
                      id="blogTitle"
                      type="text"
                      className="flex-1 py-2 px-3 bg-white rounded-md border border-slate-300 w-full"
                      placeholder="Blog Title"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-5 w-full">
                  <label
                    htmlFor="blogDescription"
                    className="font-medium leading-none text-black"
                  >
                    Description
                  </label>
                  <textarea
                    id="blogDescription"
                    className="mt-1.5 px-3 pt-2 pb-14 bg-white rounded-md border border-slate-300 w-full min-h-[80px] text-slate-400"
                    placeholder="Blog description goes here"
                  ></textarea>
                  <p className="mt-1.5 text-slate-500">
                    The title and description will be used for SEO purposes.
                  </p>
                </div>
              </header>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="self-end mt-14 w-6 aspect-square"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start px-8 mt-4 mb-2 font-medium">
              <TagInput />
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Tag key={tag.id} text={tag.text} />
                ))}
              </div>
              {/* <Button className="bg-black" > */}
              <Button className="bg-black text-white mt-6" variant="outline">Button</Button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );

}

export default BlogNewForm;
