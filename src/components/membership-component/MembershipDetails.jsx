import institutionIcon from "@icons/building-office.svg";
import professionalIcon from "@icons/laptop.svg";
import studentIcon from "@icons/student.svg";

export default function MembershipDetails() {
  const details = [
    {
      title: "Student Membership",
      description:
        "For aspiring innovators and researchers – gain access to mentorship, training, and global exposure.",
      icon: institutionIcon,
      bgColor: "bg-[#D1E6C4]", // soft green
    },
    {
      title: "Professional Membership (lifetime membership near working professional)",
      description:
        "Designed for working professionals – expand your network, collaborate on projects, and stay updated with the latest advancements.",
      icon: professionalIcon,
      bgColor: "bg-[#EFCDA2]", // soft blue
    },
    {
      title: "Institutional Membership",
      description:
        "For colleges, universities, hospitals, and research organizations – partner with ISHAI to establish Centers of Excellence, student chapters, and industry-driven programs.",
      icon: studentIcon,
      bgColor: "bg-[#A5D4C9]", // soft orange
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`${detail.bgColor} rounded shadow-2xl p-6 border border-gray-200 transition-colors duration-300 hover:shadow-lg hover:bg-opacity-90`}
          >
            <div className="mb-4 flex justify-center">
              <img
                src={detail.icon}
                alt={`${detail.title} icon`}
                className="h-12 w-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 text-center">
              {detail.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-15">
        <div className="bg-[#85BF64] h-[8px] w-[1070px] max-w-full"></div>
      </div>
    </div>
  );
}
