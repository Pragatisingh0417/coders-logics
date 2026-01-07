"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "What is website design?",
    a: "Website design refers to the layout, visual appearance, and usability of a website. It focuses on creating an engaging user experience while aligning with your brand identity and business goals.",
  },
  {
    q: "Why is good website design important?",
    a: "A well-designed website builds trust, enhances user experience, improves conversions, and helps your brand stand out online.",
  },
  {
    q: "How long does it take to design a website?",
    a: "The timeline depends on the project’s complexity. A basic website typically takes 2–4 weeks, while a more complex site may take 6–8 weeks or more.",
  },
  {
    q: "How much does website design cost?",
    a: "Costs vary based on design requirements, number of pages, and custom features. Contact us for a free quote tailored to your needs.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "We design responsive websites that look and work great on desktops, tablets, and smartphones.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We modernize existing websites with improved design, performance, and usability.",
  },
  {
    q: "Can I update the website myself after it’s built?",
    a: "Yes. We build websites on user-friendly platforms so you can easily make updates without technical knowledge.",
  },
  {
    q: "Do you offer SEO with website design?",
    a: "Yes. Our design packages include basic SEO setup like meta tags, mobile responsiveness, and fast loading speeds.",
  },
  {
    q: "Will my website be secure?",
    a: "Yes. We implement SSL, secure coding practices, and performance optimizations to protect your site.",
  },
  {
    q: "What do you need from me to get started?",
    a: "We’ll need your business info, content, logo, branding preferences, and any reference websites.",
  },
];

// 🔹 split into two columns
const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59] text-center mb-12">
          Website Designing <span className="text-[#98792a]">FAQs</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFaqs.map((faq, index) => {
              const realIndex = index * 2;
              return (
                <FAQItem
                  key={realIndex}
                  faq={faq}
                  index={realIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightFaqs.map((faq, index) => {
              const realIndex = index * 2 + 1;
              return (
                <FAQItem
                  key={realIndex}
                  faq={faq}
                  index={realIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 FAQ ITEM COMPONENT */
function FAQItem({
  faq,
  index,
  openIndex,
  toggleFAQ,
}: {
  faq: { q: string; a: string };
  index: number;
  openIndex: number;
  toggleFAQ: (index: number) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div className="border border-gray-200 rounded-xl transition-all duration-300">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-base sm:text-lg text-gray-800 font-medium"
      >
        <span>{faq.q}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-red-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-base sm:text-lg text-gray-800 leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  );
}
