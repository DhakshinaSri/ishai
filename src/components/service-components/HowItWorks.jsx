// src/components/service-components/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Line above */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#85BF64] h-[6px] w-[1270px] max-w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Title & Description */}
        <div className="max-w-[290px] md:max-w-[550px] w-full px-10 py-9 bg-[#65B5A320]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#65B5A3] mb-4">
            <span className="text-black">How</span> it works
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Regularly organized events that connect students, researchers, and
            professionals with industry leaders, fostering knowledge exchange
            and networking opportunities.
          </p>
        </div>

        {/* Right Side - Steps */}
        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-200">1</span>
            <div>
              <h3 className="text-lg font-semibold text-[#65B5A3]">Consultation</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We begin with an open conversation to understand your vision,
                requirements, and challenges. Our team listens closely,
                identifies opportunities, and provides expert insights to align
                with your goals.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-200">2</span>
            <div>
              <h3 className="text-lg font-semibold text-[#65B5A3]">Planning</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Once we understand your needs, we create a detailed roadmap.
                This includes defining project milestones, setting timelines,
                allocating resources, and ensuring every step is strategically
                aligned for success.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-200">3</span>
            <div>
              <h3 className="text-lg font-semibold text-[#65B5A3]">Execution</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Our team executes the plan efficiently, keeping your vision in
                focus while addressing challenges and ensuring everything is
                delivered with precision.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-200">4</span>
            <div>
              <h3 className="text-lg font-semibold text-[#65B5A3]">Delivery</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We ensure the final output meets the highest standards of
                quality and functionality. On-time delivery is guaranteed, with
                post-delivery support for a smooth handover and long-term value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
