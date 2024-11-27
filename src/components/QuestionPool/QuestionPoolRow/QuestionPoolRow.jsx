import React from "react";
import Header from "./Header";
import Description from "./Description";
import Tags from "./Tags";


function QuestionPoolRow({data, close}) {
  return (
   
    <main className=" border flex flex-col rounded-none max-w-[600px] mx-auto shadow-lg">
      <section className="flex flex-col pt-8 pb-8 w-full bg-white shadow-lg rounded-lg max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col px-8 w-full text-sm max-md:px-5 max-md:max-w-full">
          <Header data={data} close={close} />
          <Description  data ={data} />
        </div>
        <Tags  data = {data}/>
      </section>
    </main>
  );
}

export default QuestionPoolRow;
