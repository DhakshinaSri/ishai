export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-[#FBFBFB] shadow-md p-6 text-center hover:shadow-lg transition-shadow shadow-zinc-400 duration-300">
      <h3 className="text-lg text-black font-extrabold mb-2">{title}</h3>
      <p className="text-black font-medium text-sm">{description}</p>
    </div>
  );
}

