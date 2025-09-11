// TextBlock.jsx
export default function TextBlock({ title, description }) {
  return (
    <div className="mb-8 max-w-3xl mx-auto text-center pt-10">
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
}
