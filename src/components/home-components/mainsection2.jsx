import supportimg1 from "@assets/heroimage.png";

export default function MainSection2() {
  return (
    <section className="w-full py-16 bg-white pt-35">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-12">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Innovating Healthcare with <br /> AI – Empowering Students, Professionals & Institutions.
          </h2>
          <p className="text-gray-600 mb-8">
            We empower students, professionals, and institutions through skill development, innovation platforms, global collaborations, and career pathways in Healthcare and Artificial Intelligence. 
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800">
              Explore
            </button>
        
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="flex-1 gap-6">
          {/* Card 1 - Large Image */}
          <div className=" relative rounded-2xl overflow-hidden h-[500px]">
            <img
              src={supportimg1}
              alt="Man Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
