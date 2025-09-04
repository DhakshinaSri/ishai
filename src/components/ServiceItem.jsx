export default function ServiceItem({ iconUrl, title, bgColor }) {
  return (
    <div className="flex items-center gap-6">
      <div
        className={`flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full ${bgColor}`}
      >
        <img src={iconUrl} alt={title} className="w-6 h-6" />
      </div>
      <span className="text-base text-gray-900 leading-snug">{title}</span>
    </div>
  );
}
