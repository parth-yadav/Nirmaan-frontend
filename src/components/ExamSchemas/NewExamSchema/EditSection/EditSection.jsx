  import React from "react";
  import InputField from "./InputField";
  import MarkingScheme from "./MarkingScheme";
  import ActionButton from "./ActionButton";

  function EditSection({ data, close }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-hidden">
        <section className="flex flex-col pt-7 pb-11 bg-white w-full max-w-md shadow-lg rounded-lg">
          <header className="flex flex-col px-6 pb-2 w-full">
            <div className="flex justify-between items-center text-lg font-semibold text-black">
              <h1>Edit Section</h1>
              <button onClick={close}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  className="w-6 h-6"
                  alt="Close"
                />
              </button>
            </div>
            <InputField label="Name" value={data.name} />
            <InputField label="Question Pool" value={data.name} />
          </header>
          <main className="flex flex-col px-6 mt-3 text-sm">
            <MarkingScheme />
            <InputField label="Total Questions:" value={data.questions} />
            <div className="flex gap-3 justify-center mt-6">
              <ActionButton type="delete" text="Delete Section" />
              <ActionButton type="save" text="Save Changes" />
            </div>
          </main>
        </section>
      </div>
    );
  }

  export default EditSection;
