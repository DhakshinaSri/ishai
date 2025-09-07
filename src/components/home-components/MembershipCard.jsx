export default function MembershipCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center px-10">
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-bold text-black text-lg mb-2">{title}</h4>
      <p className="text-gray-700 font-medium text-sm">{description}</p>
    </div>
  );
}
