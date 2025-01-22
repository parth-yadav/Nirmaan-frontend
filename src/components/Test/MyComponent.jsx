
import React from "react";


import DemoPage from "../Table/page"

function MyComponent() {
  return (
    <div className="pr-8 bg-white  dark:bg-black dark:text-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 dark:bg-black dark:text-white">
       <DemoPage />
      </div>
    </div>
  );
}

export default MyComponent;
