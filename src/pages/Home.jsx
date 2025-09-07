import HeroContent from "@components/home-components/maincontent";
import HeroImg from "@components/home-components/HeroImg";
import Partners from "@components/home-components/partners";
import FeatureCard from "@components/home-components/FeatureCard";
import ServicesSection from "@components/home-components/ServicesSection";
import Membership from "@components/home-components/Membership";
import AboutUs from "@components/home-components/AboutUs";
import Testimonials from "@components/home-components/Testimonials";
import Awards from "@components/home-components/Awards";
import EndCard from "@components/home-components/EndCard";
import Footer from "@components/home-components/Footer";

export default function Home() {
  return (
    <div>
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
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          Why Choose Us?
        </h2>
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

      {/* Service */}
      <ServicesSection />

      {/* Membership Section */}
      <section>
        <Membership />
      </section>

      {/* About Us + Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 pt-0 pb-12 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2">
          <AboutUs
            title="About us"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            buttonText="Explore"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl text-[#64BFB6] font-bold mb-1 pb-6">
            What our customers say about us
          </h2>
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
