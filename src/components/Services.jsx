import ServiceContent from "./ServiceContent";
import ServiceItem from "./ServiceItem";

export default function Services({ content, services }) {
  return (
    <section className="bg-[#F1F7F6] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <ServiceContent
          title={content.title}
          description={content.description}
          buttonText={content.buttonText}
        />

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
