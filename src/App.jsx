import Navbar from "./components/Navbar";
import HeroContent from "./components/maincontent";
import HeroImg from "./components/HeroImg";
import Partners from "./components/partners";
import FeatureCard from "./components/FeatureCard";
import Services from "./components/Services";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Awards from "./components/Awards";
import EndCard from "./components/EndCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-15 min-h-[80vh] md:min-h-[70vh] pt-38 md:pt-32 gap-6">
        <div className="flex-1 flex justify-center">
          <HeroContent />
        </div>
        <div className="flex-1 flex justify-center">
          <HeroImg />
        </div>
      </section>

      {/* Partners Section */}
      <div>
        <Partners />
      </div>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 py-16">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Interactive Learning"
            description="Engage with video lessons, quizzes, and hands-on projects."
          />
          <FeatureCard
            title="Expert Mentors"
            description="Learn from industry professionals and certified trainers."
          />
          <FeatureCard
            title="Flexible Learning"
            description="Study at your own pace, from any device."
          />
          <FeatureCard
            title="Career Growth"
            description="Gain job-ready skills and certifications recognized by employers."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <Services
          content={{
            title: "Services",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Explore",
          }}
          services={[
            { iconUrl: "src/icons/student.svg", title: "ISHAI - Student Chapter", bgColor: "bg-green-200" },
            { iconUrl: "src/icons/shooting-star.svg", title: "ISHAI - Center of Excellence (COE)", bgColor: "bg-orange-200" },
            { iconUrl: "src/icons/laptop.svg", title: "Internships", bgColor: "bg-teal-200" },
            { iconUrl: "src/icons/article.svg", title: "Publications & Journals", bgColor: "bg-green-200" },
            { iconUrl: "src/icons/video-conference.svg", title: "Conferences & Webinars", bgColor: "bg-orange-200" },
            { iconUrl: "src/icons/read-cv-logo.svg", title: "Job Fairs", bgColor: "bg-teal-200" },
            { iconUrl: "src/icons/user-gear.svg", title: "Faculty Development Programs", bgColor: "bg-green-100" },
            { iconUrl: "src/icons/trophy.svg", title: "Skill Development / Professional Certification", bgColor: "bg-orange-100" },
            { iconUrl: "src/icons/cards.svg", title: "R & D", bgColor: "bg-teal-100" },
          ]}
        />
      </section>

      <section>
        {/* Membership Section */}
        <Membership imageUrl="src/assets/membershipimg.png" />
      </section>

      {/* About Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 pt-0 pb-12 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2">
          <AboutUs
            title="About us"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            buttonText="Explore"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl text-[#64BFB6] font-bold mb-1 pb-6">What our customers say about us</h2>
          <Testimonials />
        </div>
      </section>

      {/* Awards Section */}
      <Awards />

      {/* End Card Section */}
      <EndCard />

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
