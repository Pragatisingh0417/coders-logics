"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import About from "../components/About-us";
import MissionVision from "../components/MissionVision";
import Hero from "../components/HeroSection";
import Portfolio from "../components/Portfolio";
import Teamsection from "../components/TeamSection"
import GrowthCTA from "../components/GrowthCTA";


export default function AboutPage() {
  return (
    <main className="w-full text-gray-800">

      {/* ======================================
          HERO SECTION
      ====================================== */}
     {/* HERO */}
      {/* ================= HERO ================= */}
    <section
  className="relative flex items-center
  min-h-[70vh] sm:min-h-[85vh] lg:min-h-[95vh]
  bg-cover bg-center bg-no-repeat
  text-white overflow-hidden"
  style={{
    backgroundImage: "url('/about-banner.webp')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r
  from-[#0d0f2b]/90 via-[#211e59]/75 to-[#98792a]/70"></div>

  {/* Decorative glows */}
  <div className="absolute -top-10 -left-10 h-40 w-40 sm:h-52 sm:w-52 bg-[#98792a]/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 h-56 w-56 sm:h-72 sm:w-72 bg-blue-400/20 rounded-full blur-3xl"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="max-w-2xl text-center md:text-left"
    >

      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        ABOUT CODERS LOGICS
      </h1>

      <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
        Coders Logics delivers technology-driven innovation with measurable results.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

        <a
          href="/contact"
          className="inline-flex items-center justify-center
          px-6 sm:px-8 py-3 sm:py-4 rounded-full
          text-base sm:text-lg font-semibold
          bg-gradient-to-r from-[#98792a] to-[#facc15]
          text-[#0d0f2b] shadow-lg hover:opacity-90 transition"
        >
          Start Your Project →
        </a>

        <a
          href="/services"
          className="inline-flex items-center justify-center
          px-6 sm:px-8 py-3 sm:py-4 rounded-full
          text-base sm:text-lg font-semibold
          border border-white/40 hover:bg-white/10 transition"
        >
          Know More
        </a>

      </div>

    </motion.div>

  </div>
</section>
     <About />
     <Hero />
     <MissionVision />
      {/* <Teamsection /> */}
      <Portfolio />
      <GrowthCTA />
    </main>
  );
}

