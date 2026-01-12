"use client";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-20 relative   bg-[#211e59] bg-[url('/networkabout.jpg')] bg-cover bg-center  ">
       <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Our Mission & Vision
        </h2>
        <p className="mt-3 text-white max-w-2xl mx-auto">
          CODERS LOGICS is driven by innovation, efficiency, and client success.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:shadow-2xl transition">
            <FaBullseye className="text-[#98792a] text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-[#211e59]">Mission</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To empower businesses with innovative and scalable digital
              solutions that enhance performance, improve customer experiences,
              and drive growth in the digital age.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:shadow-2xl transition">
            <FaLightbulb className="text-[#98792a] text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-[#211e59]">Vision</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
Our vision is to become a globally trusted IT partner for startups and growing businesses by delivering reliable, innovative, and future-ready digital solutions with complete transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
