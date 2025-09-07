import Img1 from "@assets/Serviceimg4.jpg"
import Img2 from "@assets/Serviceimg2.jpg"
import Img3 from "@assets/Serviceimg3.jpg"
import Img5 from "@assets/Serviceimg5.jpg"

export default function ServicesList() {
  const servicesColumns = [
    [
      {
        title: "ISHAI – Student Chapter",
        description:
          "A vibrant community dedicated to nurturing innovation and leadership among students. The chapter empowers learners through workshops, competitions, and hands-on projects that bridge the gap between academics and industry.",
        bg: "bg-gradient-to-t from-[#64BFB650] to-white",
        minHeight: "min-h-[250px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        title: "AI",
        description: "Based Solution",
        bg: "bg-[#D1E6C4]",
        isCentered: true,
        minHeight: "min-h-[280px]",
        titleSize: "text-6xl sm:text-7xl lg:text-8xl",
        titleWeight: "font-bold",
        descSize: "text-bold sm:text-bold",
      },
      {
        title: "ISHAI – Centre of Excellence (COE)",
        description:
          "A hub for advanced learning and innovation where students, faculty, and industry collaborate to drive research, skill-building, and real-world solutions using emerging technologies.",
        bg: "bg-gradient-to-b from-white to-[#A2C88C90]",
        minHeight: "min-h-[250px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        type: "image",
        src: Img2,
        alt: "Service Image",
        minHeight: "min-h-[250px]",
      },
      {
        title: "Conferences & Webinars",
        description:
          "Regularly organized events that connect students, researchers, and professionals with industry leaders, fostering knowledge exchange and networking opportunities.",
        bg: "bg-teal-50",
        minHeight: "min-h-[240px]",
        titleSize: "text-base sm:text-lg lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm",
      },
    ],
    [
      {
        type: "image",
        src: Img1,
        alt: "Service Image",
        minHeight: "min-h-[350px]",
      },
      {
        title: "Publications & Journals",
        description:
          "A platform to publish original research, case studies, and scholarly work in reputed journals, enabling knowledge sharing and academic growth.",
        bg: "bg-gradient-to-t from-white to-[#FBE3B2]",
        minHeight: "min-h-[250px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        type: "image",
        src: Img3,
        alt: "Service Image",
        minHeight: "min-h-[350px]",
      },
      {
        title: "Research & Development (R&D)",
        description:
          "Encouraging innovation through collaborative research projects that solve real-world problems while contributing to technological advancement.",
        bg: "bg-white",
        minHeight: "min-h-[250px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        title: "Faculty Development Programs",
        description:
          "Tailored programs designed to upskill faculty members with the latest industry trends, teaching methodologies, and research insights.",
        bg: "bg-[#A2C88C]",
        minHeight: "min-h-[250px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
    ],
    [
      {
        title: "Internship",
        description:
          "We provide structured internship opportunities that help students gain industry exposure, practical knowledge, and workplace-ready skills for future career success.",
        bg: "bg-[#A5D4C9]",
        minHeight: "min-h-[250px]",
        titleSize: "text-2xl sm:text-3xl lg:text-4xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        title: "95%",
        description: "Accuracy in Predictions",
        bg: "bg-gradient-to-b from-[#A2C88C85] to-[#A5D4C989]",
        isCentered: true,
        minHeight: "min-h-[280px]",
        titleSize: "text-6xl sm:text-7xl lg:text-8xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        title: "Skill Development & Professional Certification",
        description:
          "Industry-aligned training programs and certifications that help students and professionals stay ahead in competitive fields.",
        bg: "bg-[#A5D4C9]",
        minHeight: "min-h-[350px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm sm:text-base",
      },
      {
        title: "Job Fairs",
        description:
          "We host job fairs that connect aspiring candidates with leading recruiters, creating pathways for employment and career advancement.",
        bg: "bg-[#FBE3B2]",
        minHeight: "min-h-[240px]",
        titleSize: "text-xl sm:text-2xl lg:text-3xl",
        titleWeight: "font-bold",
        descSize: "text-sm",
      },
      {
        type: "image",
        src: Img5,
        alt: "Service Image",
        minHeight: "min-h-[350px]",
      },
    ],
  ]

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 px-6 py-8 max-w-[1200px]">
        {servicesColumns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {column.map((service, idx) => (
              <div
                key={idx}
                className={`w-full ${service.type !== "image" ? "p-6" : ""} rounded-2xl shadow ${service.bg || ""} ${
                  service.minHeight || "min-h-[200px]"
                }`}
              >
                {service.type === "image" ? (
                  <img
                    src={service.src}
                    alt={service.alt}
                    className={`w-full h-full object-cover rounded-2xl shadow ${service.minHeight || ""}`}
                  />
                ) : service.isCentered ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <h2
                      className={`${service.titleSize || "text-xl"} ${
                        service.titleWeight || "font-bold"
                      } text-black`}
                    >
                      {service.title}
                    </h2>
                    <p className={`${service.descSize || "text-sm"} text-gray-700`}>
                      {service.description}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2
                      className={`${service.titleSize || "text-lg"} ${
                        service.titleWeight || "font-bold"
                      } text-black mb-2`}
                    >
                      {service.title}
                    </h2>
                    <p className={`${service.descSize || "text-sm"} text-gray-700`}>
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
