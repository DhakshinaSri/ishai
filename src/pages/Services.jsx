import TrustedSection from "@components/service-components/TrustedSection";
import ServiceSection from "@components/service-components/ServicesList";
import HowItWorks from "@components/service-components/HowItWorks";
import GetQuote from "@components/service-components/GetQuote";
import Footer from "@components/home-components/Footer";

export default function Services() {
  return (
    <div>
      <TrustedSection />
      <ServiceSection />
      <HowItWorks />
      <GetQuote />
      <Footer />
    </div>
  );
}
