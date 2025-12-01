"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import About from "../components/About-us";
import MissionVision from "../components/MissionVision";
import Hero from "../components/HeroSection";
import Technologies from "../components/Technologies";


export default function AboutPage() {
  return (
    <main className="w-full text-gray-800">

      {/* ======================================
          HERO SECTION
      ====================================== */}
      <section className="relative w-full h-[550px] overflow-hidden">
        <Image
          src="/coders-banner-2.jpg"
          alt="About Mercy Foundation"
          fill
          className="object-cover scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col justify-center px-6 max-w-6xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-snug">
           Carrying forward a legacy built on kindness, service, and compassion.
          </h1>

          <p className="mt-5 text-xl max-w-2xl opacity-90 tracking-wide">
Dedicated to continuing Mr. B. J. Mehta’s lifelong mission of helping others.          </p>
        </motion.div>
      </section>
     <About />
     <MissionVision />
      <Hero />
      <Technologies />
    </main>
  );
}

