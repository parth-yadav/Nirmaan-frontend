
import React from "react";
import Header from "./Header";
import ExamType from "./ExamType";
import ExamName from "./ExamName";
import Duration from "./Duration";
import Sections from "./Sections";
import SaveChanges from "./SaveChanges";

function NewExamSchema({data}) {
  return (
    <div className="  w-full max-w-xl overflow-auto z-50 bg-white">
      <main className="flex flex-col max-w-[600px]">
        <section className="flex  shadow-xl   flex-col pt-8 pb-64 w-full   max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col px-8 mt-5 mb-0 w-full max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
            <ExamType data={data} />
            <ExamName data={data} />
            <Duration data={data} />
            <Sections data={data} />
            <SaveChanges data={data} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default NewExamSchema;

//absolute inset-y-0 right-0
