
import React from "react";
import Header from "./Header";
import ExamType from "./ExamType";
import ExamName from "./ExamName";
import Duration from "./Duration";
import Sections from "./Sections";
import SaveChanges from "./SaveChanges";

function ExamSchema() {
  return (
    <main className="flex flex-col max-w-[600px]">
      <section className="flex border  shadow-xl   flex-col pt-8 pb-64 w-full   max-md:pb-24 max-md:max-w-full">
        <Header />
        <div className="flex flex-col px-8 mt-5 mb-0 w-full max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
          <ExamType />
          <ExamName />
          <Duration />
          <Sections />
          <SaveChanges />
        </div>
      </section>
    </main>
  );
}

export default ExamSchema;
