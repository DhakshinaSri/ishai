import ServiceContent from "@components/home-components/ServiceContent";
import ServiceItem from "@components/home-components/ServiceItem";

export default function Services({ content, services }) {
  return (
    <section className="bg-[#F1F7F6] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-15 items-start">

        {/* Left Side */}
        <ServiceContent
          title={content.title}
          description={content.description}
          buttonText={content.buttonText}
        />

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-1 lg:grid-cols-3 gap-x-8 gap-y-6">

          {services.map((service, index) => (
            <ServiceItem
              key={index}
              iconUrl={service.iconUrl}
              title={service.title}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
