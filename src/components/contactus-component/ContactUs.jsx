import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-section" className="bg-white py-20 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
            Get In Touch
            <span className="absolute left-0 -bottom-2 w-70 h-[6px] bg-[#64BFB6]"></span>
          </h2>
          <h2 className="text-xl font-bold text-gray-600 mb-4 relative inline-block">
            We’d love to hear from you!
          </h2>
          <p className="text-gray-600 mb-6">
            At the International Society for Healthcare & AI Innovators (ISHAI), we are always open to collaborations, partnerships, and inquiries from students, professionals, and institutions. Whether you have a question about membership, events, training programs, or industry partnerships, our team is here to assist you.   
          </p>

          <div className="space-y-6 text-gray-700">
            {/* Phone */}
            <div>
              <p className="font-bold mb-6 text-gray-500">Reach Us</p>
              <div className="flex items-center space-x-3 mb-4 font-semibold text-black">
                <Phone className="text-teal-500 w-5 h-5" />
                <span >+91-94453 93068</span>
              </div>
              <div className="flex items-center space-x-3 font-semibold text-black">
                <Mail className="text-teal-500 w-5 h-5" />
                <div className="flex flex-col">
                  <span>Email: info@ishai.in</span>
                </div>
              </div>
            </div>

            {/* Office */}
            <div>
              <p className="font-bold mb-6 text-gray-500">Our Presence</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <MapPin className="text-teal-500 w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">Chennai | Erode | Coimbatore | Madurai |<br/> Nagercoil | Trichy | Thiruvananthapuram</p>
                </div>
                
              </div>
            </div>
            <div>
              <p className="font-bold mb-6 text-gray-500">Our Office</p>
              <div className="flex items-start space-x-3 font-semibold text-black">
                <MapPin className="text-teal-500 w-5 h-5 mt-1" />
                <div>
                  <p className="mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="mb-2">Saturday: 10:00 AM – 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>

        {/* Form */}
        <div className="bg-teal-50 p-8 rounded-md">
          <form className="space-y-4">
  <input
    id="name"
    name="name"
    type="text"
    placeholder="Name *"
    autoComplete="name"
    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-black"
  />
  <input
    id="email"
    name="email"
    type="email"
    placeholder="Email *"
    autoComplete="email"
    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-black"
  />
  <input
    id="phone"
    name="phone"
    type="tel"
    placeholder="Phone Number"
    autoComplete="tel"
    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-black"
  />
  <textarea
    id="message"
    name="message"
    placeholder="Message *"
    rows="4"
    autoComplete="off"
    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none text-black"
  ></textarea>
  <button
    type="submit"
    className="px-6 py-2 mt-5 bg-black text-white rounded-md hover:bg-teal-600 transition"
  >
    Send
  </button>
</form>

        </div>
      </div>
    </section>
  );
}
