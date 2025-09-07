import { useState } from "react";

const faqs = [
  {
    question: "What is finance analytics and how can it help my business?",
    answer:
      "Finance analytics helps you understand your financial data better, so you can make smarter decisions, spot trends, and improve your business strategy.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer:
      "You can start by signing up on our platform, exploring the dashboard, and connecting your financial data sources.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer:
      "After signup, we provide an onboarding tutorial that guides you through the key features and setup process.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer:
      "Our support team is available to help you with integration and setup, ensuring you get the most out of the platform.",
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      {/* Left Section */}
      <div>
        <h2 className="text-4xl font-bold mb-8">Frequently asked <br/> questions</h2>
        <div className="bg-gradient-to-br from-[#FBE3B280] to-[#64BFB620] rounded-xl p-8 shadow">
          <h3 className="text-xl font-semibold mb-2">Still have a questions?</h3>
          <p className="text-gray-600 mb-4">
            Can’t find the answer to your question? Send us an email and we’ll
            get back to you as soon as possible!
          </p>
          <button
            className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-[#64BFB6] transition"
            onClick={() => {
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Send email
        </button>
        </div>
      </div>

      {/* Right Section (FAQ Accordion) */}
      <div className="space-y-4 mt-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-gray-50"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
