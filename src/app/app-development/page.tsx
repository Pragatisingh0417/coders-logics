"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaSyncAlt, FaStar, FaUsers, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs, FaBullhorn, FaLayerGroup  } from "react-icons/fa";
import { MobileTechStack } from "../components/MobileTechStack";
import { CrossPlatformApps } from "../components/CrossPlatformApps";
import { AppDevelopmentProcess } from "../components/AppDevelopmentProcess";
import { MobileCaseStudyCTA } from "../components/MobileCaseStudyCTA";

export default function AppDevelopmentPage() {
  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center
          min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
          bg-cover bg-center bg-no-repeat
          text-white overflow-hidden"
        style={{
          backgroundImage: "url('/app-banner.jpg')",
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
              Build Powerful Apps That Drive Growth              </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              We create intuitive, high-performance mobile and web applications tailored to your business needs.


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
          {/* main */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
      Why Choose Our{" "}
      <span className="text-[#98792a]">App Development Experts?</span>
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      We design and develop high-performance mobile applications for Android and
      iOS that are scalable, secure, and built to deliver real business value.
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
          <FaMobileAlt size={22} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
          Android & iOS App Development
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Native and cross-platform mobile apps built for performance,
          reliability, and seamless user experience.
        </p>
      </div>

      {/* CARD */}
      <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

        <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
          <FaLayerGroup size={22} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
          Scalable App Architecture
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Robust backend and architecture designed to scale as your user base
          and business grow.
        </p>
      </div>

      {/* CARD */}
      <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

        <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
          <FaCogs size={22} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
          Testing & Performance Optimization
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Rigorous testing, performance tuning, and security checks to ensure
          smooth and crash-free apps.
        </p>
      </div>

      {/* CARD */}
      <div className="group relative bg-white p-8 sm:p-10 rounded-3xl
        shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:-translate-y-1">

        <div className="absolute right-8 top-8 w-12 h-12 rounded-xl
          bg-[#98792a]/10 text-[#98792a]
          flex items-center justify-center">
          <FaRocket size={22} />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#211e59]">
          App Launch & Ongoing Support
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Complete app store deployment, updates, monitoring, and continuous
          support after launch.
        </p>
      </div>

    </div>
  </div>
</section>
<MobileTechStack />
<CrossPlatformApps />
<AppDevelopmentProcess />
<MobileCaseStudyCTA />

    </div>
  );
}
