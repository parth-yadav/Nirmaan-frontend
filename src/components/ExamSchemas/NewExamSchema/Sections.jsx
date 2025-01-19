import React, { useState } from "react";
import EditSectionTable from "./EditSection/EditSectionTable/editsectiontable";
import AddNewSection from "././../AddNewSection/AddNewSection";
import { Button } from "@/components/ui/button";

function Sections({ data }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [sections, setSections] = useState(data.sections);

  const handleAddNew = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleSubmitNewSection = (newSection) => {
    setSections([...sections, newSection]);
    setShowAddForm(false);
  };

  return (
    <section className="mt-10 max-md:mt-10 ">
      <div className="flex items-center justify-between w-full max-w-[500px] max-md:mr-2.5 max-md:max-w-full">
        {/* Left Section */}
        <div className="flex text-black whitespace-nowrap">
          <h2 className="text-lg font-semibold leading-loose">Sections</h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <div className="leading-6 text-black">Total: {sections.length}</div>
          <Button
            onClick={handleAddNew}
            className="flex gap-1.5 justify-center items-center px-2 py-1.5 leading-none text-black bg-gray-200 rounded-md"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09c59797db0ddeec2a41a16db34aa1a3060f3aaf4fdd529728b052e77bc5cb9f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
              alt="Add new icon"
            />
            <span className="self-stretch my-auto">Add new</span>
          </Button>
        </div>
      </div>

      <div className="shrink-0 max-md:max-w-full" />
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <AddNewSection
            onClose={handleCloseForm}
            onSubmit={handleSubmitNewSection}
          />
        </div>
      )}
      <EditSectionTable data={{ ...data, sections }} />

      <div className="flex flex-wrap gap-5 justify-between mt-3.5 mr-5 ml-5 w-full text-sm font-medium leading-6 text-black max-w-[501px] max-md:mr-2.5 max-md:max-w-full">
        <div>Total Questio: {data.total_question}</div>
        <div>Maximum Marks: {data.total_max_marks}</div>
      </div>
    </section>
  );
}

export default Sections;

{
  /* <div className="flex gap-5 mt-4 leading-none text-black">
            <div >
              Name
            </div>
            <div className="grow">Questions</div>
            <div>Marking</div>
            <div>Max Marks</div>
          </div> */
}

{
  /* {data.sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-wrap gap-5 justify-between mt-1.5 mr-5 ml-5 w-full text-sm leading-6 text-black max-w-[499px] max-md:mr-2.5 max-md:max-w-full">
            <div>{section.name}</div>
            <div className="flex gap-10 whitespace-nowrap">
              <div>{section.questions}</div>
              <div>{section.marking}</div>
              <div>{section.max_marks}</div>
            </div>
          </div>
          <div className="shrink-0 mt-1.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
        </React.Fragment>
      ))} */
}
