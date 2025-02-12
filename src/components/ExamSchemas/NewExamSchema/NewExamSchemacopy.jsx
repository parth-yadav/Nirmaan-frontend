import React from "react";
import Header from "./Header";
import ExamType from "./ExamType";
import ExamName from "./ExamName";
import Duration from "./Duration";
import Sections from "./Sections";
import SaveChanges from "./SaveChanges";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewExamSchema from "./NewExamSchema";
import MarketPlace from "../MarketPlace/MarketPlace";

function NewExamSchemaCover(props) {
  return (
    <div className="absolute border inset-y-0 right-0 w-full max-w-xl overflow-auto z-50 bg-white">
      <main className="flex flex-col max-w-[600px]">
        {/* Header Section */}
        <header className="flex flex-col py-4 px-8 pb-2 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full text-sm font-medium leading-none text-yellow-800 whitespace-nowrap max-md:max-w-full">
            {/* Draft Badge */}
            <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-yellow-200 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff664a03fd301942be935c5a3f6a087796bed09ab76f59433feca2175435e8a?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt="Draft Icon"
              />
              <div className="self-stretch my-auto">Draft</div>
            </div>

            {/* Close Button */}
            <button
              onClick={props.close}
              className="shrink-0 w-8 aspect-square flex items-center justify-center"
            >
              <X className="w-5 text-black h-5" />
            </button>
          </div>
        </header>

        {/* Tabs Navigation */}
        <Tabs defaultValue="account" className="">
          <TabsList className="items-center p-2 w-full text-sm font-medium leading-none rounded-md bg-slate-100 max-md:max-w-full">
            <div className="flex flex-wrap w-full gap-2">
              <TabsTrigger
                value="account"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2.5 px-3 py-1.5 rounded text-slate-900 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Exam Schema
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2.5 px-3 py-1.5 rounded text-slate-900 data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Marketplace Info
              </TabsTrigger>
            </div>
          </TabsList>

          {/* Tabs Content */}
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
