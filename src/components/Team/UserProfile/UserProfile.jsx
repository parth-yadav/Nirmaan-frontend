
import React from "react";
import ProfileHeader from "./ProfileHeader";
import PersonalInfo from "./PersonalInfo";
import PrivilegesSection from "./PrivilegesSection";

function UserProfile({ data, close }) {
  return (
    <article className="border flex flex-col rounded-none w-full max-w-[600px]">
      <div className=" flex flex-col pt-8 pb-16 w-full bg-white shadow-sm max-md:max-w-full">
        <ProfileHeader data={data} close={close} />
        <PersonalInfo data={data} />
        <PrivilegesSection />
      </div>
    </article>
  );
}

export default UserProfile;
