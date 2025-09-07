import MembershipContent from "@components/home-components/MembershipContent";
import MembershipCard from "@components/home-components/MembershipCard";

import institutionIcon from "@icons/building-office.svg";
import hrIcon from "@icons/laptop.svg";
import studentIcon from "@icons/student.svg";
import img from "@assets/membershipimg.png";

export default function Membership({ imageUrl }) {
  return (
    <section className="relative w-full px-10 sm:px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-2 md:mb-8">
        {/* Top: Image + Text */}
        <MembershipContent imageUrl= {img} />

        {/* Bottom: Overlapping Rectangle */}
        <div className="relative z-10 -mt-16 md:-mt-30 w-full flex justify-center">
          <div className="bg-[#FBE3B2] rounded-2xl py-10 px-6 
                          w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl 
                          grid grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
            <MembershipCard
              icon={<img src={institutionIcon} alt="Institutions" className="w-12 h-12" />}
              title="Institutions"
              description="Connect with students and professionals, showcase your courses, and build academic partnerships."
            />
            <MembershipCard
              icon={<img src={hrIcon} alt="HR" className="w-12 h-12" />}
              title="HR’s / Working Professionals"
              description="Share expertise, discover talent, and expand your professional network."
            />
            <MembershipCard
              icon={<img src={studentIcon} alt="Students" className="w-12 h-12" />}
              title="Students / Job Seekers"
              description="Access learning resources, connect with mentors, and explore career opportunities."
            />
          </div>
        </div>
      </div>
    </section>
  );
}