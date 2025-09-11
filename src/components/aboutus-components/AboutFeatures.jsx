// src/components/aboutus-components/AboutFeatures.jsx
export default function AboutFeatures() {
  return (
    <div className="bg-[#A2C88C] py-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white px-6">
        <div className="p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Bridging Academia and Industry:</h3>
          <p className="text-base">We facilitate active partnerships between universities, research institutions, and industry players. This collaboration promotes joint research initiatives, internships, technology transfer, and commercialization of innovations.</p>
        </div>
        <div className="p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Educational Initiatives:</h3>
          <p className="text-base">Through workshops, seminars, guest lectures, and certification programs, we keep students and professionals abreast of the latest developments in healthcare technologies and AI, including emerging trends such as machine learning, predictive analytics, telemedicine, and bioinformatics.</p>
        </div>
        <div className="p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Innovation and Entrepreneurship Support:</h3>
          <p className="text-base">We organize hackathons, innovation challenges, and startup pitch events to inspire creativity and provide a launchpad for novel ideas. Our mentorship programs connect budding entrepreneurs with industry veterans and investors.</p>
        </div>
        <div className="p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Research Facilitation:</h3>
          <p className="text-base">By providing access to resources, funding opportunities, and expert guidance, we support research projects that push the boundaries of knowledge in healthcare and AI.</p>
        </div>
      </div>
    </div>
  );
}
