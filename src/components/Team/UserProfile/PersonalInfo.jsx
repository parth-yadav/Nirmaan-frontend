
import React from "react";

function PersonalInfo({data}) {
  const personalDetails = [
    { label: "Email",  },
    { label: "Phone",  },
    { label: "Gender",  },
    { label: "From",  },
    { label: "Birthday", },
  ];

  return (
    <section className="flex gap-5  px-8 justify-between mt-8 max-w-full text-base font-medium w-[383px]">
      <div className="flex flex-col items-start text-gray-700 whitespace-nowrap">
        {personalDetails.map((detail, index) => (
          <div key={index} className={index > 0 ? "mt-2.5" : ""}>
            {detail.label}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start text-black">
        <div className="flex flex-col items-start text-black">
          <div>{ data.email}</div>
          <div className="mt-2.5">{ data.phone}</div>
          <div className="mt-2.5">{data.gender}</div>
          <div className="mt-2.5">{data.from}</div>
          <div className="mt-2.5">{ data.birthday}</div>
        </div>
        
      </div>
    </section>
  );
}

export default PersonalInfo;
