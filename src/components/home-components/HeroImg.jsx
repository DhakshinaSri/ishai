import heroImage from "@assets/HeroImage.png";

export default function HeroImg() {
  return (
    <div className="relative flex-1 flex flex-col items-center">

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="relative w-full max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl z-10"
      />
      </div>
      );
      }