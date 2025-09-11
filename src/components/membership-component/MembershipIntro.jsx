import logo from "@assets/logoishai.png";

export default function MembershipIntro() {
  return (
    <div className="max-w-6xl mx-auto mb-5 px-6 mt-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 p-6 md:p-10">
  <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3">
    Become a Member with <br/>
    <span className="text-[#65B5A3]">ISHAI</span>
  </h2>

  <h3 className="text-lg md:text-2xl text-[#f9b62e] font-semibold mb-2">
    INTERNATIONAL SOCIETY FOR HEALTHCARE & AI INNOVATION
  </h3>

  {/* Colored Line */}
  <div className="w-85 h-[6px] bg-[#65B5A3] mb-6"></div>

  <p className="text-gray-600 leading-relaxed">
    Join our growing community of institutions, professionals, and students. 
    Membership provides opportunities to connect, collaborate, and grow together.  
    Whether you represent an institution, work in industry, or are a student/job seeker, 
    our membership platform helps you network, share knowledge, and unlock career opportunities.  
  </p>

  <p className="text-gray-600 mt-3 leading-relaxed">
    Select your role below to get started and complete your membership application.  
    Together, we can build a strong and supportive professional network.  
  </p>
</div>


        {/* Right Side - Logo */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={logo}
            alt="Company Logo"
            className="h-64 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
