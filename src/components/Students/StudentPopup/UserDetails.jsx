import React from "react";

export function UserDetails({data}) {
  // const userInfo = {
  //   email: "panditprajjawal@gmail.com",
  //   phone: "+91 9123456789",
  //   gender: "Male",
  //   from: "State, Country",
  //   birthday: "16 April",
  // };

  return (
    <div className="flex gap-5 justify-between mt-8 max-w-full text-base font-medium w-[383px] px-8">
      <div className="flex flex-col items-start text-gray-700 whitespace-nowrap">
        <div>Email</div>
        <div className="mt-2.5">Phone</div>
        <div className="mt-2.5">Gender</div>
        <div className="mt-2.5">From</div>
        <div className="self-stretch mt-2.5">Birthday</div>
      </div>
      <div className="flex flex-col items-start text-black">
        <div className="self-stretch">{data.email}</div>
        <div className="mt-2.5">{data.phone}</div>
        <div className="mt-2.5">{data.gender}</div>
        <div className="mt-2.5">{data.from}</div>
        <div className="mt-2.5">{data.birthday}</div>
      </div>
    </div>
  );
}
