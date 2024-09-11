
import React from "react";

function PersonalInfo() {
  const personalDetails = [
    { label: "Email", value: "panditprajjawal@gmail.com" },
    { label: "Phone", value: "+91 9123456789" },
    { label: "Gender", value: "Male" },
    { label: "From", value: "State, Country" },
    { label: "Birthday", value: "16 April" },
  ];

  return (
    <section className="flex gap-5 justify-between mt-8 max-w-full text-base font-medium w-[383px]">
      <div className="flex flex-col items-start text-gray-700 whitespace-nowrap">
        {personalDetails.map((detail, index) => (
          <div key={index} className={index > 0 ? "mt-2.5" : ""}>
            {detail.label}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start text-black">
        {personalDetails.map((detail, index) => (
          <div key={index} className={index > 0 ? "mt-2.5" : ""}>
            {detail.value}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PersonalInfo;
