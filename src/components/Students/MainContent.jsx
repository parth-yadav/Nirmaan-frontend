import React from "react";  
import TeamMembersTable from "./StudentsTable/t-table"


function MainContent() {
  return (
    <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
       Students
      </h1>
      <p className="mt-3 text-sm leading-5 text-black max-md:max-w-full dark:text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eaque recusandae ex corrupti doloribus. Eos numquam suscipit doloremque ratione, modi dolor similique porro nihil animi maiores ipsam illum alias beatae.
      </p>
      <div className="flex gap-5 justify-between mt-2 w-full max-md:flex-wrap max-md:max-w-full">   
      </div>
      <TeamMembersTable />
    </div>
  );
}

export default MainContent;
