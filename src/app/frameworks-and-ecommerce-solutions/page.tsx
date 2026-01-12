"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaSyncAlt, FaStar, FaUsers, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs, FaBullhorn, FaLayerGroup  } from "react-icons/fa";
import { FrameworksSection } from "../components/FrameworksSection";
import { EcommerceSolutions } from "../components/EcommerceSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import { WhyCoders } from "../components/WhyCoders";
import { DevelopmentCoders } from "../components/Developmentcoders";
import { MobileCaseStudyCTA } from "../components/MobileCaseStudyCTA";
import FrameworkEcommerceCTA from "../components/FrameworkEcommerceCTA";


export default function FrameworkandEcommerce() {
  return (
    <div className=" w-full">

      {/* HERO */}
      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center
          min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
          bg-cover bg-center bg-no-repeat
          text-white overflow-hidden"
        style={{
          backgroundImage: "url('/framework.jpg')",
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
  Powerful Frameworks & Scalable E-Commerce Solutions
</h1>

<p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
  We build fast, secure, and scalable web applications using modern frameworks
  like Angular, Laravel, and Node.js — along with high-conversion e-commerce
  solutions tailored to your business.
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

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
      Modern <span className="text-[#98792a]">Web Frameworks</span> We Use
    </h2>

    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
      We leverage industry-leading frameworks to build robust, scalable, and
      high-performance web applications.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-16">

      {/* Angular */}
      <div className="group bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
        <FaLaptopCode className="text-4xl text-[#98792a]" />
        <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
          Angular Development
        </h3>
        <p className="mt-3 text-gray-600">
          Enterprise-grade, component-driven applications with strong
          architecture and performance.
        </p>
      </div>

      {/* Laravel */}
      <div className="group bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
        <FaCogs className="text-4xl text-[#98792a]" />
        <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
          Laravel Development
        </h3>
        <p className="mt-3 text-gray-600">
          Secure, scalable backend systems with clean APIs and powerful admin
          panels.
        </p>
      </div>

      {/* Node */}
      <div className="group bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
        <FaRocket className="text-4xl text-[#98792a]" />
        <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
          Node.js Development
        </h3>
        <p className="mt-3 text-gray-600">
          High-performance, real-time applications built for scalability and
          speed.
        </p>
      </div>

    </div>
  </div>
</section>



<section className="py-24 bg-[#211e59] to-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff]">
      Scalable <span className="text-[#98792a]">E-Commerce Solutions</span>
    </h2>

    <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
      From custom online stores to enterprise e-commerce platforms, we build
      conversion-focused solutions that grow with your business.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition">
        <FaUsers className="text-4xl text-[#98792a]" />
        <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
          Custom E-Commerce Development
        </h3>
        <p className="mt-3 text-gray-600">
          Fully customized shopping experiences with secure payments,
          user-friendly design, and scalable architecture.
        </p>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition">
        <FaChartLine className="text-4xl text-[#98792a]" />
        <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
          Performance & Growth Optimization
        </h3>
        <p className="mt-3 text-gray-600">
          Speed optimization, conversion tracking, and analytics-driven
          improvements to maximize sales.
        </p>
      </div>

    </div>
  </div>
</section>
<DevelopmentCoders />

<WhyCoders />
<FrameworkEcommerceCTA />
    </div>
  );
}
