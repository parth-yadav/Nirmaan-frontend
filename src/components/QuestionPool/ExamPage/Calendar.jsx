
import React from "react";

const Calendar = () => {
  const days = Array.from({ length: 60 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col px-5 pt-6 pb-72 mx-auto w-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100 max-md:pb-24">
      <div className="flex gap-1 self-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69d980d4dcc2ce264cd2c1c5a4e858cd5e4274fd4f5027c2939212dac95faadf?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 aspect-square w-[30px]"
        />
        <div className="my-auto">Nirmaan</div>
      </div>
      <div className="flex flex-wrap gap-4 mt-9 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className={`px-4 w-10 h-10 ${
              index === 2
                ? "bg-red-300"
                : index === 3
                ? "text-black bg-blue-300 rounded-3xl"
                : "bg-white"
            } rounded-md`}
          >
            {day}
          </div>
        ))}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7209eee6b739cf63343436f5ec4a9c8fb079747d632a525fe2ab2d8e90643d11?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 w-10 rounded-none aspect-square"
        />
      </div>
    </div>
  );
};

export default Calendar;
