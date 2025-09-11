import Services from "@components/home-components/Services";
import student from "@icons/student.svg";
import star from "@icons/shooting-star.svg";
import laptop from "@icons/laptop.svg";
import article from "@icons/article.svg";
import video from "@icons/video-conference.svg";
import job from "@icons/read-cv-logo.svg";
import userGear from "@icons/user-gear.svg";
import trophy from "@icons/trophy.svg";
import cards from "@icons/cards.svg";

export default function ServicesSection() {
  const content = {
    title: "Services",
    description:
      "The International Society for Healthcare & AI Innovators (ISHAI) is dedicated to shaping the future of healthcare and artificial intelligence by connecting students, academia, and industry. Through initiatives like ISHAI Student Chapters and the ISHAI Center of Excellence (COE), ISHAI empowers students with knowledge, hands-on experience, and global exposure. These platforms encourage innovation, collaboration, and leadership, preparing the next generation of professionals to drive impactful change in healthcare and AI worldwide.",
    buttonText: "Explore",
  };

  const services = [
    { iconUrl: student, title: "ISHAI - Student Chapter", bgColor: "#85BF64" },
    { iconUrl: star, title: "ISHAI - Center of Excellence (COE)", bgColor: "#A2C88C" },
    { iconUrl: laptop, title: "Internships", bgColor: "#D1E6C4" },
    { iconUrl: article, title: "Publications & Journals", bgColor: "#E5983A" },
    { iconUrl: video, title: "Conferences & Webinars", bgColor: "#E8AF69" },
    { iconUrl: job, title: "Job Fairs", bgColor: "#EFCDA2" },
    { iconUrl: userGear, title: "Faculty Development Programs", bgColor: "#65B5A3" },
    { iconUrl: trophy, title: "Skill Development / Professional Certification", bgColor: "#8FDCCA" },
    { iconUrl: cards, title: "R & D", bgColor: "#A5D4C9" },
  ];

  return (
    <section>
      <Services content={content} services={services} />
    </section>
  );
}
