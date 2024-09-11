
import React from "react";
import Header from "./Header";
import Description from "./Description";
import Tags from "./Tags";
import Actions from "./Actions";

function QuestionPool() {
  return (
    <main className="flex flex-col rounded-none max-w-[600px]">
      <section className="flex flex-col pt-8 pb-96 w-full bg-white shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col px-8 w-full text-sm max-md:px-5 max-md:max-w-full">
          <Header />
          <Description />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56360435dd7935ebb8ca7fd5ed71e5a0935b982303611a0d709ca7d4c88099e9?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain self-end mt-14 w-6 aspect-square max-md:mt-10 max-md:mr-2"
          />
        </div>
        <Tags />
        <div className="flex flex-col mt-4 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
          <hr className="w-full bg-gray-300 border-0 h-px max-md:max-w-full" />
          <Actions />
          <hr className="mt-9 w-full bg-gray-300 border-0 h-px max-md:max-w-full" />
        </div>
      </section>
    </main>
  );
}

export default QuestionPool;
