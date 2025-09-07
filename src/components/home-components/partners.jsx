import facebook from "@assets/facebook.png";
import google from "@assets/google.png";
import amazon from "@assets/amazon.png";
import linkedin from "@assets/linkeddin.png";
import microsoft from "@assets/microsoft.png";

export default function Partners() {
  return (
    
    <section className="w-full bg-[#E9FBB2]">
      
      <div className="h-[65px] overflow-hidden">
       
        <div className="hidden sm:flex h-full items-center justify-center gap-14 px-6">
          <img src={facebook} alt="Partner 1" className="h-8 sm:h-10 object-contain" />
          <img src={google} alt="Partner 2" className="h-8 sm:h-10 object-contain" />
          <img src={linkedin} alt="Partner 3" className="h-8 sm:h-10 object-contain" />
          <img src={microsoft} alt="Partner 4" className="h-8 sm:h-10 object-contain" />
          <img src={amazon} alt="Partner 5" className="h-8 sm:h-10 object-contain" />
        </div>

        {/* Mobile (< sm): marquee (only one row, scrolling) */}
        <div className="sm:hidden h-full flex items-center">
          {/* track is duplicated once for seamless loop */}
          <div className="flex items-center gap-10 whitespace-nowrap animate-partners-marquee px-6">
            <img src={facebook} alt="Partner 1" className="h-8 object-contain" />
            <img src={google} alt="Partner 2" className="h-8 object-contain" />
            <img src={linkedin} alt="Partner 3" className="h-8 object-contain" />
            <img src={microsoft} alt="Partner 4" className="h-8 object-contain" />
            <img src={amazon} alt="Partner 5" className="h-8 object-contain" />
            {/* duplicate set for continuous scroll */}
            <img src={facebook} alt="" className="h-8 object-contain" />
            <img src={google} alt="" className="h-8 object-contain" />
            <img src={linkedin} alt="" className="h-8 object-contain" />
            <img src={microsoft} alt="" className="h-8 object-contain" />
            <img src={amazon} alt="" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
