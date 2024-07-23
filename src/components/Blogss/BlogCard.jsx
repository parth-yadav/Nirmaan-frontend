
import React from "react";

function BlogCard({ tags, date, title, content, likes, views, comments }) {
  return (
    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-6 py-5 w-full text-sm font-medium bg-gray-50 rounded-xl max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full text-xs leading-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 text-blue-800 whitespace-nowrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex gap-1.5 justify-center px-1.5 bg-blue-200 rounded-md"
              >
                <img
                  loading="lazy"
                  src={`http://b.io/ext_${12 + index}-`}
                  alt=""
                  className="shrink-0 my-auto w-3 aspect-square"
                />
                <div>{tag}</div>
              </div>
            ))}
          </div>
          <time className="my-auto text-gray-500">{date}</time>
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-normal leading-8 text-black max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-3.5 leading-6 text-black max-md:max-w-full">
          {content}
        </p>
        <div className="flex gap-5 self-start mt-6 text-black whitespace-nowrap leading-[100%]">
          <div className="flex flex-1 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1646c25c4b3fcdabd3ee831d72d2e40855242a38e0f7df2e3f063ea311756691?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="my-auto">{likes}</div>
          </div>
          <div className="flex flex-1 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e0684022dd40e936f128c744b3409df4fd99c457b3cb8bed70ec9d6f855e14?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="my-auto">{views}</div>
          </div>
          <div className="flex flex-1 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd44d81c7989cc5f7356c2d07820ee88685c6d3d54775071769c3d0eeefc72c2?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="my-auto">{comments}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
