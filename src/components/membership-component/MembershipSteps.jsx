// src/components/MembershipSteps.jsx
export default function MembershipSteps() {
  const steps = [
    "Choose your role",
    "Fill your details",
    "Submit to join with us",
  ];

  return (
    <div className="flex flex-col items-start gap-8 p-6 ">
      <h2 className="text-2xl font-bold text-black">
        Get Membership <span className="text-[#65B5A3]">in few steps</span>
      </h2>
      <div className="flex flex-col gap-7 mt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-9 h-9 bg-[#65B5A3] text-white rounded-full font-bold">
              {index + 1}
            </div>
            <p className="text-xl text-gray-700 font-bold">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
