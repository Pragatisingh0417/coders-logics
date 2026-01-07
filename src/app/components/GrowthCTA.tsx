"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

/* ---------- TYPES ---------- */
interface PerkProps {
  icon: IconType;
  text: string;
}

/* ---------- COMPONENT ---------- */
const GrowthCTA: React.FC = () => {
  return (
    <section className="relative bg-white py-20 px-6 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ---------- HEADING ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
        >
          Turn Your{" "}
          <span className="text-[#98792a]">Product Idea</span>{" "}
          Into a Scalable Digital Solution
        </motion.h2>

        <p className="text-lg text-black max-w-3xl mx-auto">
          Coders Logics helps startups and businesses design, build,
          launch, and scale high-performance digital products with
          long-term technical support.
        </p>

        {/* ---------- PERKS ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <Perk icon={FaChartLine} text="Performance & Growth Strategy" />
          <Perk icon={FaHeadset} text="Long-Term Post-Launch Support" />
          <Perk icon={FaShieldAlt} text="Secure & Reliable Architecture" />
          <Perk icon={FaRocket} text="Fast Launch & Iterative Scaling" />
        </motion.div>

        {/* ---------- CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="/contact"
            className="inline-block text-base sm:text-lg font-semibold
              bg-[#98792a] text-white
              px-10 py-4 rounded-full shadow-xl
              hover:scale-105 transition"
          >
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthCTA;

/* ---------- REUSABLE PERK ---------- */
const Perk: React.FC<PerkProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-3
      bg-white/10 rounded-xl px-6 py-4 backdrop-blur-md
      hover:bg-white/15 transition"
    >
      <Icon className="text-[#98792a] text-2xl" />
      <span className="font-medium text-[#211e59]">{text}</span>
    </div>
  );
};
