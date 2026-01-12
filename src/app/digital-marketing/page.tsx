"use client";
import { FaBullhorn, FaChartLine, FaUsers, FaRocket, FaSyncAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import WhyChooseUs from "../components/WhyChooseUs";
import DigitalMarketingBenefits from "../components/DigitalMarketingBenefits";
import DigitalMarketingServices from "../components/DigitalMarketingServices";
import DigitalMarketingProcess from "../components/DigitalMarketingProcess";
import CaseStudyCTA from "../components/CaseStudyCTA";

export default function DigitalMarketingPage() {
  return (
    <div className="">

      {/* HERO */}
      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center
          min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
          bg-cover bg-center bg-no-repeat
          text-white overflow-hidden"
        style={{
          backgroundImage: "url('/digital-marketing-banner.jpg')",
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
              Elevate Your Brand With Expert Digital Marketing              </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              We create innovative marketing strategies that drive traffic, generate leads, and convert visitors into loyal customers.

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

      {/* main */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
            Why Work With Our{" "}
            <span className="text-[#98792a]">Digital Marketing Experts?</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our team blends creativity with data-driven strategies to build campaigns
            that convert, scale, and deliver measurable business growth.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">

            {/* CARD */}
            <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

              <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
                <FaChartLine size={22} />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
                SEO & Organic Growth
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Boost your search visibility and attract high-intent organic traffic
                that converts consistently.
              </p>
            </div>

            {/* CARD */}
            <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

              <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
                <FaUsers size={22} />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
                Targeted Ads & Campaigns
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Reach the right audience with precision targeting across Google,
                social media, and paid platforms.
              </p>
            </div>

            {/* CARD */}
            <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

              <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
                <FaSyncAlt size={22} />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
                Analytics & Optimization
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Track performance, analyze data, and continuously optimize campaigns
                for maximum ROI.
              </p>
            </div>

            {/* CARD */}
            <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

              <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
                <FaStar size={22} />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
                Creative Strategy
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Innovative ideas and compelling messaging that strengthen your brand
                identity and engagement.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PROCESS */}
      <DigitalMarketingServices />
      <DigitalMarketingBenefits />
      <WhyChooseUs />
      <DigitalMarketingProcess />
      <CaseStudyCTA />
    </div>
  );
}
