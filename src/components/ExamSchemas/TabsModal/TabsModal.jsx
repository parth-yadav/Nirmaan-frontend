import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewExamSchema from "../NewExamSchema/NewExamSchema";
import MarketPlace from "../MarketPlace/MarketPlace";

export default function TabsModal() {
  return (
    <div className="w-full max-w-[600px] bg-white rounded-t-lg shadow-[-5px_0px_20px_rgba(0,0,0,0.25)]">
      <Tabs defaultValue="exam-schema" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="exam-schema" className="text-lg font-semibold">
            Exam schema
          </TabsTrigger>
          <TabsTrigger
            value="marketplace-info"
            className="text-lg  font-semibold "
          >
            Marketplace info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="exam-schema">
          <NewExamSchema />
        </TabsContent>
        <TabsContent value="marketplace-info">
          <MarketPlace />
        </TabsContent>
      </Tabs>
    </div>
  );
}
