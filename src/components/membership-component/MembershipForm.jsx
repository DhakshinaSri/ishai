import { useState } from "react";

const tabs = ["Institutions", "HR's / Working Professionals", "Students / Job Seekers"];

export default function MembershipForm() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const inputClass =
    "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#65B5A310]";
  const btnClass =
    "bg-black text-white px-6 py-2 rounded-md hover:bg-teal-600 transition shadow";

  const renderForm = () => {
    switch (activeTab) {
      case "Institutions":
        return (
          <form className="space-y-4">
            <input type="text" placeholder="Institution Name *" className={inputClass} />
            <input type="text" placeholder="Address for Communication *" className={inputClass} />
            <textarea placeholder="Brief Profile of the institution" className={inputClass} />
            <input type="text" placeholder="Courses offered *" className={inputClass} />
            <input type="text" placeholder="Applicant Name *" className={inputClass} />
            <input type="text" placeholder="Mobile Number *" className={inputClass} />
            <input type="email" placeholder="Email Id *" className={inputClass} />
            <textarea placeholder="Message" className={inputClass} />
            <button type="submit" className={btnClass}>Submit</button>
          </form>
        );

      case "HR's / Working Professionals":
        return (
          <form className="space-y-4">
            <input type="text" placeholder="Name *" className={inputClass} />
            <input type="text" placeholder="Company Name *" className={inputClass} />
            <input type="text" placeholder="Office Address *" className={inputClass} />
            <input type="text" placeholder="Designation" className={inputClass} />
            <input type="text" placeholder="Qualification *" className={inputClass} />
            <input type="text" placeholder="Area of Specialisation *" className={inputClass} />
            <input type="text" placeholder="Residential Address *" className={inputClass} />
            <input type="url" placeholder="LinkedIn Profile *" className={inputClass} />
            <input type="text" placeholder="Mobile Number *" className={inputClass} />
            <input type="email" placeholder="Email Id *" className={inputClass} />
            <textarea placeholder="Message" className={inputClass} />
            <button type="submit" className={btnClass}>Submit</button>
          </form>
        );

      case "Students / Job Seekers":
        return (
          <form className="space-y-4">
            <input type="text" placeholder="Name *" className={inputClass} />
            <input type="text" placeholder="College Name *" className={inputClass} />
            <input type="text" placeholder="Location *" className={inputClass} />
            <input type="text" placeholder="Degree *" className={inputClass} />
            <input type="text" placeholder="Department *" className={inputClass} />
            <input type="text" placeholder="Year of Admission *" className={inputClass} />
            <input type="text" placeholder="Current Semester *" className={inputClass} />
            <input type="url" placeholder="LinkedIn Profile *" className={inputClass} />
            <input type="text" placeholder="Mobile Number *" className={inputClass} />
            <input type="email" placeholder="Email Id *" className={inputClass} />
            <textarea placeholder="Message" className={inputClass} />
            <button type="submit" className={btnClass}>Submit</button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center px-6">
      <div className="w-full max-w-2xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 rounded-md text-1sm font-medium shadow ${
                activeTab === tab
                  ? "bg-[#65B5A3] text-white"
                  : "bg-gray-100 text-black hover:bg-[#65B5A350]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg mb-20">
          {renderForm()}
        </div>
      </div>
    </div>
  );
}
