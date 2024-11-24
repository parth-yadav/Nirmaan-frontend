import React from "react";
import Header from "./Header";
import ExamType from "./ExamType";
import ExamName from "./ExamName";
import Duration from "./Duration";
import Sections from "./Sections";
import SaveChanges from "./SaveChanges";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewExamSchema from "./NewExamSchema";
import MarketPlace from "../MarketPlace/MarketPlace";

function NewExamSchemaCover(props) {
  return (
    <div className=" absolute border inset-y-0 right-0 w-full max-w-xl overflow-auto z-50 bg-white">
      <main className="flex flex-col max-w-[600px]">
        <header className="flex flex-col px-8 pb-2 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full text-sm font-medium leading-none text-yellow-800 whitespace-nowrap max-md:max-w-full">
            <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-yellow-200 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff664a03fd301942be935c5a3f6a087796bed09ab76f59433feca2175435e8a?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt=""
              />
              <div className="self-stretch my-auto">Draft</div>
            </div>
            <button onClick={props.close}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?apiKey=8a82faa9db93454483a68c973b38c7b0&&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="shrink-0 w-8 aspect-square"
                alt=""
              />
            </button>
          </div>
        </header>

        <Tabs defaultValue="account">
          <TabsList>
            <nav className="flex flex-wrap items-center p-1.5 mt-8 w-full text-sm font-medium leading-none rounded-md bg-slate-100 max-md:mr-1.5 max-md:max-w-full">
              <TabsTrigger
                value="account"
                className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5 bg-white rounded text-slate-900"
              >
                Exam schema
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5 bg-gray- rounded text-slate-900"
              >
                Marketplace Info
              </TabsTrigger>
            </nav>
          </TabsList>
          <TabsContent value="account">
            <NewExamSchema data={props.data} />
          </TabsContent>
          <TabsContent value="password">
            <MarketPlace data={props.data} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default NewExamSchemaCover;

//absolute inset-y-0 right-0
