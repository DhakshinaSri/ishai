export default function AboutSection({ imageSrc, title, description }) {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 px-4 md:px-0 gap-8">
      {/* Left: Image */}
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto"
        />
      </div>
      

      {/* Right: Content */}
      <div className="md:w-1/2">
        <h2 className="text-6xl font-bold mb-4">{title}</h2>
        <div className="w-85 h-[6px] bg-[#65B5A3] mb-6"></div>
        <h3 className="text-lg md:text-2xl text-[#f9b62e] font-bold mb-2">
    INTERNATIONAL SOCIETY FOR HEALTHCARE & AI INNOVATION
  </h3>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </section>
  );
}
