// src/components/service-components/GetQuote.jsx
export default function GetQuote() {
  return (
    <section className="bg-[#65B5A320] border-t-[6px] border-[#85BF64] py-16 px-6 md:px-12 lg:px-20">     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Quote */}
        <div className="max-w-[500px]">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
            Get a <span className="text-[#65B5A3]">Personalized Quote</span> <br /> Today
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Every project is unique, and so are our solutions. Tell us about your needs, 
            and we’ll provide a tailored quote that fits your goals and budget.
          </p>
          <button className="bg-black text-white font-semibold py-3 px-8 rounded-md shadow hover:bg-[#65B5A3] transition">
            Get Quote
          </button>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col items-start md:items-end">
          {/* Heading with underline */}
          <div className="text-right mb-6">
            <h2 className="text-2xl font-bold text-black">
              We are <span className="text-[#65B5A3]">easy to reach</span>
            </h2>
            <div className="h-[5px] w-[350px] bg-[#65B5A3] mt-2 ml-auto"></div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[600px]">
            <div className="bg-white shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-black mb-2">For Enquiries</h3>
              <p className="text-gray-700 text-sm font-medium">
                91+585-656-658 <br /> lamaro@lamaroyc.us
              </p>
            </div>
            <div className="bg-white shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-bold text-black mb-2">Address</h3>
              <p className="text-gray-700 text-sm font-medium">
                44 Danvers, NY City, <br /> USA, 70-102
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
