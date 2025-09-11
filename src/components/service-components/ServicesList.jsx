import { useState } from "react";

const servicesData = {
  "ISHAI - Student Chapter": [
    {
      title: "About ISHAI - Student Chapter",
      desc: "The International Society for Healthcare & AI Innovators (ISHAI) is committed to shaping the future of healthcare and artificial intelligence by creating strong connections between academia and industry. To bring this vision closer to students, ISHAI supports the establishment of Student Chapters across educational institutions, including engineering, arts & science, allied health sciences, nursing, and physiotherapy colleges."
    },
    {
      title: "Objective",
      desc: "The ISHAI Student Chapters are designed to empower students by giving them access to the latest knowledge, technologies, and innovations in healthcare and AI."
    },
    {
      title: "What is an ISHAI Student Chapter?",
      desc: "An ISHAI Student Chapter is a student-led community within an institution, guided by ISHAI. It acts as a hub for: Connecting students with industry professionals and researchers; Encouraging innovation, creativity, and continuous learning; Building leadership and teamwork skills through real-world exposure."
    },
    {
      title: "Key Activities",
      desc: [
    "Industry Expert Talks – Interactive sessions with professionals from healthcare, AI, and technology domains to discuss trends, challenges, and opportunities.",
    "Ideation Workshops & Hackathons – Platforms for students to brainstorm and develop innovative solutions to real-world problems.",
    "Newsletters & Publications – Regular updates featuring industry insights, chapter activities, and student achievements.",
    "Conferences & Symposiums – National and international forums (virtual & in-person) for students to present ideas, connect with experts, and explore global research."
  ],
    }
  ],
  "ISHAI - Centre of Excellence (COE)": [
    {
      title: "About ISHAI - Centre of Excellence (COE)",
      desc: "In today’s fast-changing world of healthcare and artificial intelligence, students need more than classroom learning — they need practical exposure, global industry connections, and innovation-driven opportunities. To meet this need, ISHAI proposes the establishment of Centers of Excellence (COE) within colleges and universities, in collaboration with leading industry partners."
    },
    {
      title: "Objective",
      desc: "The COE aims to empower students with hands-on training, research opportunities, and real-world exposure, acting as a bridge between academia and global industry leaders."
    },
    {
  title: "What is a COE?",
  desc: [
    "An ISHAI Center of Excellence is a specialized hub within an institution that brings together students, faculty, and professionals to:",
    "Explore new technologies.",
    "Develop innovative projects.",
    "Gain entrepreneurial and leadership skills."
  ]
},
    {
      title: "Key Features",
      desc: [
        "Domain-Specific Training in healthcare technology, AI, data analytics, bioinformatics, and more.",
        "Innovation Projects supported by expert mentoring and access to facilities.",
        "Workshops & Seminars led by global experts and industry specialists.",
        "Industry & Research Collaborations with top organizations worldwide.",
        "Entrepreneurship Support to nurture student startups and ideas."
      ]
    },
    {
      title: "Benefits",
      desc: [
        "Practical skills and improved employability.",
        "Exposure to cutting-edge research and innovation.",
        "Direct connections with industry partners and global experts.",
        "Enhanced reputation for the institution as a hub of excellence."
      ]
    },
    {
      title: "ISHAI Support",
      desc: [
        "Expert mentors and global guest speakers.",
        "International network of professionals and researchers.",
        "Guidance on research, innovation, and intellectual property.",
        "Support for industry-driven projects and collaborations.",
        "By setting up an ISHAI Center of Excellence in collaboration with industry partners, institutions can transform education into innovation, preparing students for the future of healthcare and AI while strengthening global industry linkages."
      ]
    }
  ],
  "Internships with ISHAI": [
    {
      title: "Overview",
      desc: "The International Society for Healthcare & AI Innovators (ISHAI) supports students, colleges, and universities by providing access to diverse internship opportunities across emerging fields. Our internships are designed to bridge the gap between academic learning and industry requirements, helping students gain real-world experience and enhance employability."
    },
    {
  title: "Domains Covered",
  desc: [
    "ISHAI internships are open to students from multiple disciplines, including:",
    "Healthcare & Allied Health Sciences",
    "Artificial Intelligence (AI), Machine Learning (ML), Data Science (DS)",
    "Software Development & Testing, UI/UX, and Designing",
    "Life Sciences",
    "Business & Management (MBA Graduates)"
  ]
},
    {
  title: "Modes of Internship",
  desc: [
    "Virtual Mode – Flexible, online internships accessible from anywhere.",
    "Offline Mode – In-person internships with industry exposure.",
    "Offered with an affordable subscription fee to make opportunities accessible for all students."
  ]
}
,
    {
      title: "Powered by Skill Hive",
      desc: "All ISHAI internships are facilitated through Skill Hive, a dedicated platform that connects students with curated internship opportunities across industries. Skill Hive ensures a structured, mentored experience where students can learn, practice, and apply their knowledge effectively. Through ISHAI and Skill Hive, students gain practical skills, global exposure, and industry connections that prepare them for their future careers."
    }
  ],
  "Publications & Journals": [
    {
      title: "Overview",
      desc: "At ISHAI, we believe that knowledge grows stronger when it is shared. To encourage research and innovation in healthcare and artificial intelligence, we are actively working on launching our own dedicated journal in the near future."
    },
    {
  title: "Current Support",
  desc: [
    "While our official ISHAI Journal is in development, we currently support students, scholars, and professionals in:",
    "Publishing their research papers in reputed national and international journals.",
    "Receiving guidance on manuscript preparation, formatting, and submission.",
    "Showcasing impactful research through conferences, symposiums, and newsletters."
  ]
}
,
    {
      title: "Looking Ahead",
      desc: "The upcoming ISHAI Journal will serve as a global platform for researchers and innovators to publish original work, exchange ideas, and contribute to the future of Healthcare and AI."
    }
  ],
  "Conferences & Webinars": [
    {
      title: "Overview",
      desc: "ISHAI organizes conferences, webinars, and symposiums that bring together a global community of healthcare professionals, AI innovators, academicians, and industry leaders."
    },
    {
  title: "Key Highlights",
  desc: [
    "National & International Conferences to present research, innovative projects, and emerging technologies.",
    "Thematic Webinars on trending topics like AI in healthcare, data science, medical technology, and innovation.",
    "Networking Opportunities with professionals, startups, and research organizations.",
    "Platforms for students to interact with experts and gain real-world insights beyond classroom learning.",
    "These events help create a vibrant ecosystem of collaboration, innovation, and continuous learning."
  ]
}

  ],
  "Job Portal": [
    {
      title: "Overview",
      desc: "Finding the right career opportunities can be challenging for students and professionals. At ISHAI, we bridge this gap through our exclusive partnership with Novus Jobs, a dedicated career platform for Healthcare, Artificial Intelligence (AI), IT, Life Sciences, and Allied Fields. Our Job Portal, powered by Novus Jobs, provide a unique platform that connects employers, institutions, and job seekers in one place—making career opportunities more accessible and transparent."
    },
    {
  title: "Why ISHAI–Novus Jobs Job Fairs?",
  desc: [
    "Exclusive Focus – The first-of-its-kind initiative dedicated to Healthcare & AI-driven careers.",
    "Industry Connectivity – Direct engagement with leading hospitals, research institutions, IT firms, startups, healthcare technology companies & equipment manufacturers.",
    "Global Opportunities – Open doors to employers across India and abroad through both virtual and physical job fairs.",
    "End-to-End Career Support – From resume building and interview preparation to career counseling and employer networking, we ensure students are job-ready."
  ]
},
    {
  title: "Our Services",
  desc: [
    "Campus Recruitment Drives – Organizing on-campus hiring events where employers connect directly with graduating students.",
    "Virtual & Physical Job Fairs – Offering flexibility and reach, allowing participation from global recruiters and job seekers.",
    "Direct Access to Employers – Partnerships with top healthcare providers, AI companies, IT firms, life science organizations, and startups.",
    "Career Readiness Programs – Resume writing workshops, mock interviews, and guidance sessions led by industry mentors.",
    "Skill-to-Job Mapping – Leveraging Novus Jobs’ AI-powered platform to match students’ skills with suitable job opportunities."
  ]
},
    {
  title: "Who Can Participate?",
  desc: [
    "Students from Healthcare, Allied Health Sciences, Life Sciences, Nursing, Physiotherapy, and Pharmacy.",
    "Graduates and professionals from AI, ML, Data Science, IT, Software Development, and Engineering (ECE, EEE, CSE, etc.).",
    "MBA and Management students seeking roles in healthcare and technology-driven industries.",
    "Fresh graduates and working professionals looking for domain-specific or cross-functional roles."
  ]
},
    {
      title: "The ISHAI–Novus Jobs Advantage",
      desc: "By combining ISHAI’s academic-industry ecosystem with Novus Jobs’ recruitment expertise, we provide a holistic career gateway for students and professionals. Our aim is not just to create job fairs but to build sustainable career pathways in healthcare and AI. With Novus Jobs as our exclusive career partner, ISHAI ensures that every learner has access to meaningful employment opportunities and is empowered to shape the future of healthcare and technology innovation."
    }
  ],

  "Faculty Development Programs": [
    {
      title: "Overview",
      desc: "Faculty are the backbone of every institution. ISHAI conducts Faculty Development Programs (FDPs) to ensure educators stay ahead with the latest skills and global best practices."
    }, 
    {
  title: "Program Features",
  desc: [
    "1. Training on emerging technologies like AI, ML, and healthcare innovations.",
    "2. Sessions on modern teaching methodologies and blended learning approaches.",
    "3. Exposure to research trends and publication strategies.",
    "4. Interaction with international experts and industry mentors.",
    "By empowering faculty, ISHAI helps institutions improve the overall quality of education and research output."
  ]
}

  ],

  "Skill Development & Professional Certification": [
    {
      title: "Overview",
      desc: "At ISHAI, we prepare students and professionals for the future by offering industry-relevant certification programs that combine advanced knowledge with practical, real-world applications. Designed with input from global experts and industry leaders, our programs ensure learners are equipped with career-ready skills that meet international standards."
    },
    {
  title: "Why ISHAI Certifications?",
  desc: [
    "1. Programs tailored to emerging industry needs.",
    "2. Delivered by experienced professionals and international mentors.",
    "3. Certifications that enhance employability and global career opportunities.",
    "4. Flexible delivery in virtual and offline modes."
  ]
},
    {
  title: "Popular Certification Programs",
  desc: [
    "Artificial Intelligence & Machine Learning (AI/ML)",
    "Medical Coding",
    "Medical Scribing with AI",
    "Data Science & Analytics (DS/CA)",
    "Healthcare Technology Applications",
    "Software Development, Testing & UI/UX Design"
  ]
},
    {
  title: "Key Features of Our Training",
  desc: [
    "Hands-On Learning – Projects, case studies, and live problem-solving.",
    "Mentorship – Access to global experts and industry leaders.",
    "Flexible Learning Modes – Virtual Training: Online programs accessible anywhere; Offline Training: In-person sessions for practical, lab-based learning.",
    "On-Campus Training – Certifications can also be conducted within colleges and universities (UG/PG levels), seamlessly integrated into academic schedules.",
    "Affordable & Recognized – Accessible to all learners, with certifications that are valued by global employers."
  ]
}
,
    {
      title: "Who Can Enroll?",
      desc: "Healthcare, AI/ML, engineering, management students, fresh graduates, and working professionals."
    }
  ],

  "Research & Development (R&D)": [
    {
      title: "Overview",
      desc: "ISHAI actively promotes innovation and research by collaborating with institutions, researchers, and industry leaders worldwide."
    },
    {
  title: "Our R&D Support Includes",
  desc: [
    "Mentorship for student and faculty research projects.",
    "Assistance in prototype development and innovation challenges.",
    "Guidance in patent filing, research funding, and commercialization.",
    "Joint projects with international researchers, startups, and healthcare organizations."
  ],
  note: "Through these initiatives, ISHAI ensures that institutions become centers of innovation, producing solutions that address real-world healthcare and AI challenges."
}

  ]
};

export default function ServicesList() {
  const [activeCategory, setActiveCategory] = useState("ISHAI - Student Chapter");

  return (
    <section className="py-12 px-6 md:px-20">
      <h1 className="text-4xl md:text-3xl font-bold text-center mb-15">
        ISHAI Services
      </h1>

      {/* Large screen layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-20 mb-15">
        {/* Sidebar */}
        <div className="flex flex-col space-y-7 text-lg font-bold">
          {Object.keys(servicesData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-left transition ${
                activeCategory === category
                  ? "text-[#65B5A3] font-semibold"
                  : "text-gray-800 hover:text-gray-600"
              }`}
            >
              {activeCategory === category && (
                <span className="mr-2 text-[#64BFB6]">→</span>
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Subtopics grid */}
        <div className="col-span-3 grid sm:grid-cols-2 gap-8">
          {servicesData[activeCategory].map((item, idx) => (
            <div key={idx} className="p-4">
              <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
              {Array.isArray(item.desc) ? (
  <ul className="list-disc list-inside text-gray-600 space-y-2">
    {item.desc.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-gray-600">{item.desc}</p>
)}

            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
<div className="md:hidden space-y-4 mb-15">
  {Object.keys(servicesData).map((category) => (
    <details key={category} className="border-2 border-[#65B5A350] rounded p-4">
      <summary className="cursor-pointer font-semibold text-lg text-black">
        {category}
      </summary>
      <div className="mt-3 grid gap-4">
        {servicesData[category].map((item, idx) => (
          <div key={idx} className="p-3">
            <h4 className="font-bold text-xl text-gray-600 mb-4">{item.title}</h4>
            {Array.isArray(item.desc) ? (
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {item.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </details>
  ))}
</div>


    </section>
  );
}
