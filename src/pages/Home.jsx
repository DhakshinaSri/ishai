import HeroCarousel from "@components/home-components/HeroCarousel";
import FeatureCard from "@components/home-components/FeatureCard";
import ProductsSection from "@components/home-components/newservice";
import Membership from "@components/home-components/Membership";
import AboutUs from "@components/home-components/AboutUs";
import Awards from "@components/home-components/Awards";
import EndCard from "@components/home-components/EndCard";
import Footer from "@components/home-components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      
        <div>
          <HeroCarousel />
        </div>
      

      {/* About Us + Testimonials */}

    <AboutUs
      title="About us"
      description="International Society for Healthcare & AI Innovators (ISHAI) is a registered non-profit organization established under the Trust Acts governed by the Government of Tamil Nadu, dedicated to advancing the fields of Healthcare and Artificial Intelligence (AI). Our primary focus is to serve as a catalyst for innovation, knowledge exchange, and collaboration, enabling the seamless integration of cutting-edge technologies into healthcare solutions that can improve lives and create sustainable societal impact."
      buttonText="Learn more"
    />
  


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

      {/* Products Section */}
      <ProductsSection />

      {/* Membership Section */}
      <section>
        <Membership />
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
