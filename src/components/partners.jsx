export default function Partners() {
  return (
    
    <section className="w-full bg-[#E9FBB2]">
      
      <div className="h-[65px] overflow-hidden">
       
        <div className="hidden sm:flex h-full items-center justify-center gap-14 px-6">
          <img src="src\assets\facebook.png" alt="Partner 1" className="h-8 sm:h-10 object-contain" />
          <img src="src\assets\google.png" alt="Partner 2" className="h-8 sm:h-10 object-contain" />
          <img src="src\assets\linkeddin.png" alt="Partner 3" className="h-8 sm:h-10 object-contain" />
          <img src="src\assets\microsoft.png" alt="Partner 4" className="h-8 sm:h-10 object-contain" />
          <img src="src\assets\amazon.png" alt="Partner 5" className="h-8 sm:h-10 object-contain" />
        </div>

        {/* Mobile (< sm): marquee (only one row, scrolling) */}
        <div className="sm:hidden h-full flex items-center">
          {/* track is duplicated once for seamless loop */}
          <div className="flex items-center gap-10 whitespace-nowrap animate-partners-marquee px-6">
            <img src="src\assets\facebook.png" alt="Partner 1" className="h-8 object-contain" />
            <img src="src\assets\google.png" alt="Partner 2" className="h-8 object-contain" />
            <img src="src\assets\linkeddin.png" alt="Partner 3" className="h-8 object-contain" />
            <img src="src\assets\microsoft.png" alt="Partner 4" className="h-8 object-contain" />
            <img src="src\assets\amazon.png" alt="Partner 5" className="h-8 object-contain" />
            {/* duplicate set for continuous scroll */}
            <img src="src\assets\facebook.png" alt="" className="h-8 object-contain" />
            <img src="src\assets\google.png" alt="" className="h-8 object-contain" />
            <img src="src\assets\linkeddin.png" alt="" className="h-8 object-contain" />
            <img src="src\assets\microsoft.png" alt="" className="h-8 object-contain" />
            <img src="src\assets\amazon.png" alt="" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
