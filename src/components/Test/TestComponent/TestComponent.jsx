/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TestHeader from "./TestHeader";
import TestStats from "./TestStats";
import TestAttempt from "./TestAttempt";
import TestSections from "./TestSections";
import TestResults from "./TestResults.tsx";
import TestAnswerKey from "./TestAnswerKey";

function TestComponent(props) {
  return (
    <main className=" px-4 flex flex-col rounded shadow-[0px_0px_20px_rgba(0,0,0,0.1)] pt-8 pb-20 bg-white border-l   max-w-[38rem]">
      
      <TestHeader data = {props.data} close = {props.close} />
      <TestStats data = {props.data} />
      <TestAttempt data = {props.data} />
      <hr className="mt-12 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <TestSections data = {props.data} />
      <hr className="mt-8 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
      <TestResults results = {props.data.results} />
      <hr className="mt-10 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
      <TestAnswerKey data = {props.data} />
    </main>
  );
}

export default TestComponent;