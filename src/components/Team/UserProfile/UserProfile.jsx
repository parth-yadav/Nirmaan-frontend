
import React from "react";
import ProfileHeader from "./ProfileHeader";
import PersonalInfo from "./PersonalInfo";
import PrivilegesSection from "./PrivilegesSection";

function UserProfile() {
  return (
    <article className="flex flex-col rounded-none max-w-[600px]">
      <div className="flex flex-col pt-8 pb-16 w-full bg-white shadow-sm max-md:max-w-full">
        <ProfileHeader />
        <PersonalInfo />
        <PrivilegesSection />
      </div>
    </article>
  );
}

export default UserProfile;
