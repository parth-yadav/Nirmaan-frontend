import React from "react";
import Header from "./Header";
import Description from "./Description";
import Tags from "./Tags";

function QuestionPoolRow({ data, close }) {
  return (
    <div className="absolute shadow-lg bg-white  shadow-gray-700 inset-y-0 right-0 overflow-auto sm:h-screen w-full max-w-[600px] max-md:max-w-full">
      <main className="border flex bg-white p-6 flex-col rounded-none w-full">
       
            <Header data={data} close={close} />
            <Description data={data} />
          
          <Tags data={data} />
        
      </main>
    </div>
  );
}

export default QuestionPoolRow;
