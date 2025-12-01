"use client";
import {
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";

export default function Hero() {
  const features = [
    { icon: <FaLaptopCode />, title: "Modern Tech Expertise" },
    { icon: <FaClock />, title: "Fast & Reliable Delivery" },
    { icon: <FaShieldAlt />, title: "Secure & Scalable Systems" },
    { icon: <FaUsers />, title: "Dedicated Expert Team" },
    { icon: <FaCogs />, title: "Custom-Built Solutions" },
    { icon: <FaCheckCircle />, title: "Client-Focused Approach" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          Why Choose Coders Logics?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our core strengths make us the ideal partner for your digital goals.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="text-yellow-600 text-4xl mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#211e59]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
