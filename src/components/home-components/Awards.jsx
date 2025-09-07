import AwardCard from "@components/home-components/AwardCard";

export default function Awards() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-15 py-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <AwardCard
          title="Learn at Your Own Pace"
          description="Watch lessons, complete tasks, and practice."
          bgColor="bg-[#A2C88C]"
        />
        <AwardCard
          title="Earn Certificates"
          description="Showcase your skills with recognized certificates."
          bgColor="bg-[#65B5A3]" // Coral shade
        />
        <AwardCard
          title="Achieve"
          description="Apply your knowledge to real-world challenges."
          bgColor="bg-[#E4983A]" // Dodger Blue shade
        />
        <AwardCard
          title="Achieve"
          description="Apply your knowledge to real-world challenges."
          bgColor="bg-[#FBE3B2]" // Dodger Blue shade
        />
      </div>
    </section>
  );
}
