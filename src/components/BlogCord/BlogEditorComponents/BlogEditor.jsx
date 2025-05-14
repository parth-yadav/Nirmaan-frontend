import React from "react";
import BlogHeader from "./BlogHeader";
import BlogTitle from "./BlogTitle";
import BlogDescription from "./BlogDescription";
import TagInput from "./TagInput";
import Tag from "./Tag";
import ActionButton from "./ActionButton";
import StatisticItem from "./StatisticItem";
import { useDispatch, useSelector } from "react-redux";

function BlogEditor() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.blogEditor.isVisible);

  if (!isVisible) {
    return null;
  }

  const handleHideEditor = () => {
    dispatch(hideEditor());
  };

  return (
    <div className=" absolute shadow-lg shadow-gray-700 inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
      <div className="p-4 h-full rounded-l-lg">
        <main className="flex flex-col rounded-none max-w-[600px]">
          <section className="flex flex-col pt-8 pb-40 w-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-md:pb-24 max-md:max-w-full">
            <div className="flex z-10 flex-col px-8 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <BlogHeader />
                <BlogTitle title="Blog Title" />
                <BlogDescription description="Blog description goes here" />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
                alt="Decorative element"
              />
            </div>
            <div className="flex flex-col items-start px-8 pb-14 mt-0 w-full text-sm font-medium max-md:px-5 max-md:max-w-full">
              <TagInput />
              <Tag text="Tag1" />
              <Tag text="Some other tag" />
            </div>
            <div className="flex z-10 flex-col items-start -mt-4 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
              <button className="gap-2.5 self-stretch px-4 py-2 ml-8 text-sm font-medium leading-6 text-white rounded-lg bg-slate-900 max-md:ml-2.5">
                Save changes
              </button>
              <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
              <div className="flex flex-col mt-8 ml-8 max-w-full w-[310px] max-md:ml-2.5">
                <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
                  Actions
                </h2>
                <div className="flex gap-4 mt-5 w-full text-sm font-medium leading-6">
                  <ActionButton
                    text="Edit blog content"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4f01932fdfa9bd93b5b761937dbdb9e08544d001f7e1fd0cfb0b6b6d1fb91f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                    bgColor="bg-slate-900"
                    textColor="white"
                  />
                  <ActionButton
                    text="Unpublish"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd700e087a44b3a539342b38719e23bb7e384d457870b519e98f651c93649ef?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                    bgColor="bg-red-300"
                    textColor="black"
                  />
                </div>
              </div>
              <hr className="self-stretch mt-9 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
              <div className="flex flex-col items-start mt-7 ml-8 max-w-full text-sm font-medium leading-none text-black w-[143px] max-md:ml-2.5">
                <h2 className="text-xl font-semibold tracking-normal leading-snug">
                  Statistics
                </h2>
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e0684022dd40e936f128c744b3409df4fd99c457b3cb8bed70ec9d6f855e14?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text="Total Views: 9873"
                />
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fd44d81c7989cc5f7356c2d07820ee88685c6d3d54775071769c3d0eeefc72c2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text="Saved by: 32"
                />
                <StatisticItem
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8b12b3589f94d8e323827619185302e1a655da69e9da762b1d278a630ce1e9e4?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  text="Liked by: 459"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BlogEditor;
