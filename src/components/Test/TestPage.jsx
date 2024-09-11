
import React from "react";
// import ExamList from "./ExamList";

import TestTable from "./TestTable/test-table2"

function MainContent() {
  return (
   
    <main className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
          Your mock exams
        </h1>
        <p className="mt-3 text-sm leading-5 text-black max-md:max-w-full dark:text-white">
          Here is a list of all mock tests already purchased by you.
        </p>
       
        <TestTable />
      </div>
    </main>
    
  );
}

export default MainContent;
