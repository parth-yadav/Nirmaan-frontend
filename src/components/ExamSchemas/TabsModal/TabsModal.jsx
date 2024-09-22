import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewExamSchema from '../NewExamSchema/NewExamSchema'
import MarketPlace from '../MarketPlace/MarketPlace'


function TabsModal() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Acc</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><NewExamSchema /></TabsContent>
  <TabsContent value="password"><MarketPlace /></TabsContent>
</Tabs>

    </div>
  )
}

export default TabsModal