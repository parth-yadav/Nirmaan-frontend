
import React from "react";

function Header() {
  return (
    <header className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <h1 className="justify-center mt-2.5 text-6xl font-bold text-black whitespace-nowrap max-md:text-4xl">
        Profile
      </h1>
      <div className="flex gap-5 text-2xl font-medium text-neutral-600">
        <div className="flex gap-2.5 px-4 py-3 whitespace-nowrap bg-white rounded-lg shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20ea05224220d3825146ccb639b8df025e4a7aa84ffed43a3db874f65ce9ee7?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt="Points icon"
            className="shrink-0 aspect-square w-[26px]"
          />
          <div>1600</div>
        </div>
        <div className="justify-center px-4 py-3 bg-white rounded-lg shadow-sm">
          22 JAN 2022
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f5395f610faa02adfc42009fdfb9a570c9353a2efe604d4442a447968ae37ea?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt="User avatar"
          className="shrink-0 aspect-square w-[50px]"
        />
      </div>
    </header>
  );
}

export default Header;
