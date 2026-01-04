"use client";

import { Target, HandCoins, Package } from "lucide-react";

export default function AboutFeaturesSection() {
  return (
    <section className="w-full py-20 bg-white relative">

      {/* Soft background glow like screenshot */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[90%] h-[90%] mx-auto blur-3xl opacity-20 bg-gray-200 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* CARD 1 */}
        <div
          className="p-10 rounded-2xl shadow-xl border-b-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          style={{ borderColor: "#98792a" }}
        >
          <Target className="w-20 h-20 text-[#98792a]" />

          <h2 className="text-2xl font-bold text-[#211e59] mt-6">
            Our Aim
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Our aim at Coders Logics is to deliver smart, scalable, and result-oriented technology solutions that help businesses grow faster and stronger. We focus on quality, clarity, and real business impact — not just code.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <HandCoins className="w-20 h-20 text-[#98792a]" />

          <h2 className="text-2xl font-bold text-[#211e59] mt-6">
            Company Vision
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Our vision is to become a globally trusted IT partner for startups and growing businesses by delivering reliable, innovative, and future-ready digital solutions with complete transparency.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <Package className="w-20 h-20 text-[#c69e37]" />

          <h2 className="text-2xl font-bold text-[#211e59] mt-6">
            The Procedure
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            We follow a simple and effective workflow:
            Understand your goals and requirements
            Plan the right strategy and roadmap
            Build clean, scalable solutions
            Test for quality and performance
            Deliver on time
            Support for long-term success          </p>
        </div>

      </div>
    </section>
  );
}
