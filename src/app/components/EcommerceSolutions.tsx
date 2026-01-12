"use client";

import { FaUsers, FaChartLine } from "react-icons/fa";

export function EcommerceSolutions() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
          Scalable <span className="text-[#98792a]">E-Commerce Solutions</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          High-conversion online stores designed for performance, security,
          and long-term growth.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition">
            <FaUsers className="text-4xl text-[#98792a]" />
            <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
              Custom E-Commerce Development
            </h3>
            <p className="mt-3 text-gray-600">
              Tailored shopping experiences with secure payments and seamless
              checkout.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition">
            <FaChartLine className="text-4xl text-[#98792a]" />
            <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
              Conversion & Performance Optimization
            </h3>
            <p className="mt-3 text-gray-600">
              Speed, analytics, and UX improvements to maximize sales and ROI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
