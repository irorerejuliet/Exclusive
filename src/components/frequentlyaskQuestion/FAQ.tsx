"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 24 hours and delivered within 3–7 business days, depending on your location.",
  },
  {
    question: "Can I return an item?",
    answer:
      "Absolutely. We offer a 30-day return policy for unused items in their original packaging.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, PayPal, Apple Pay, Google Pay, and other secure payment options.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive an email containing your tracking number and delivery updates.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary depending on your country.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team 24/7 via email at support@yourstore.com or through our contact page.",
  },
];

function FAQAccordion({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">
          {item.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
const  FAQ =() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center my-14">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            Support Center
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about shopping, shipping, returns, and
            your orders.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-indigo-600 rounded-3xl p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>

          <p className="text-indigo-100 mb-6">
            Our support team is here to help you anytime.
          </p>

          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
export default FAQ