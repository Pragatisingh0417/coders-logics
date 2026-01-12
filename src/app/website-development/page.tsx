"use client";

import { FaLaptopCode, FaUserTie, FaSyncAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";
import Benefits from "../components/Website-benefits";
import TypesOfWebDesign from "../components/TypesOfWebDesign";
import WhyChooseUs from "../components/WhyChooseUs";
import TechnologySection from "../components/Technologies";
import DevelopmentProcess from "../components/DevelopmentProcess";

export default function WebsiteDevelopmentPage() {
  return (
    <div className="bg-gray-50 w-full">

      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center
      min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
      bg-cover bg-center bg-no-repeat
      text-white overflow-hidden"
        style={{
          backgroundImage: "url('/coders-image-1.jpg')",
        }}
      >
        {/* DARK OVERLAY (for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r
      from-[#0d0f2b]/90 via-[#211e59]/75 to-[#98792a]/70"></div>

        {/* Decorative glows */}
        <div className="absolute -top-10 -left-10 h-52 w-52 bg-[#98792a]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-400/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              Build Powerful & Stunning Websites
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              We craft high-performing, visually appealing, and conversion-driven
              websites using modern technologies and proven development practices.
            </p>

            <div className="mt-8 flex flex-row gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center
              px-8 py-4 rounded-full text-lg font-semibold
              bg-gradient-to-r from-[#98792a] to-[#facc15]
              text-[#0d0f2b] shadow-lg hover:opacity-90 transition"
              >
                Start Your Project →
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center
              px-8 py-4 rounded-full text-lg font-semibold
              border border-white/40 hover:bg-white/10 transition"
              >
                Know More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <TypesOfWebDesign />

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />
      {/* ================= PROCESS ================= */}
      <TechnologySection />

      <Benefits />
      <DevelopmentProcess />
    </div>
  );
}
