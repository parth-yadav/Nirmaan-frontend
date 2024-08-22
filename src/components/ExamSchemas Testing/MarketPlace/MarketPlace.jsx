
import React from "react";
import Header from "./Header";
import TabNavigation from "./TabNavigation";
import TargetGroups from "./TargetGroups";
import InputField from "./InputField";
import ActionButtons from "./ActionButtons";
import Statistics from "./Statistics";

function MarketPlace() {
  return (
    <main className="flex flex-col rounded-none max-w-[600px] shadow-[-5px_0px_20px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col pt-8 pb-14 w-full bg-white max-md:max-w-full">
        <div className="flex flex-col px-8 w-full text-sm max-md:px-5 max-md:max-w-full">
          <Header />
          <TabNavigation />
          <TargetGroups />
          <InputField label="Total Stocks :" />
          <InputField label="Max stocks per user :" />
          <InputField label="Max attempts per user :" />
          <InputField label="Price (in INR) :" />
          <InputField label="Discount (in %) :" />
          <ActionButtons />
          <hr className="mt-7 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
          <section className="flex flex-col mt-5 ml-8 max-w-full w-[281px] max-md:ml-2.5">
            <h2 className="self-start text-lg font-semibold leading-loose text-black">
              Actions
            </h2>
            <div className="flex gap-5 mt-5 w-full text-sm font-medium leading-6">
              <button className="flex gap-2 justify-center items-center px-4 py-2 text-black whitespace-nowrap bg-green-300 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b80628c0a38f03fd0b74ad95806902c4029cf489f305270e9aca95afeea16e?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="self-stretch my-auto">Publish</span>
              </button>
              <button className="flex gap-2 justify-center items-center px-4 py-2 text-white bg-purple-700 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c49ef80bdf59a5b6f3f0aa42373a38a9aa7a06b3621f32c0da7196099c6788?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="self-stretch my-auto">Boost indexing</span>
              </button>
            </div>
          </section>
          <hr className="mt-8 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
          <Statistics />
        </div>
      </div>
    </main>
  );
}

export default MarketPlace;
