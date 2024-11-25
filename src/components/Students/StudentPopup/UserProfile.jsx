import React from "react";
import { UserHeader } from "./UserHeader";
import { UserDetails } from "./UserDetails";
import { UserStats } from "./UserStats";
import { ActionButtons } from "./ActionButtons";

function UserProfile({data , close}) {
  return (
    <div className="flex flex-col rounded-none max-w-[600px]">
      
      <div className="flex flex-col pt-8 pb-96 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
        <UserHeader data = {data} close = {close}  />
        <UserDetails data = {data} />
        <div className="mt-7 w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-8 mb-0 ml-8 max-w-full font-medium w-[349px] max-md:mb-2.5 max-md:ml-2.5">
          <UserStats data = {data} />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
