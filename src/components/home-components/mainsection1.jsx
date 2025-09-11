import supportimg1 from "@assets/supportimg1.jpg";
import supportimg2 from "@assets/supportimg2.jpg";

export default function MainSection1() {
  return (
    <section className="w-full py-16 bg-white pt-35">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-12">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Shaping the Future <br /> of Healthcare with <br /> AI and Innovators.
          </h2>
          <p className="text-gray-600 mb-8">
            International Society for Healthcare & AI Innovators (ISHAI) is a global non-profit dedicated to connecting academia, industry, and research.
            
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800">
              Explore
            </button>
        
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Card 1 - Large Image */}
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden h-[500px]">
            <img
              src={supportimg1}
              alt="Man Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">Healthcare and Artificial Intelligence</h3>
            </div>
          </div>

          {/* Card 2 - Image */}
          <div className="relative rounded-2xl overflow-hidden h-[500px]">
            <img
              src={supportimg2}
              alt="Women Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">Research & Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
