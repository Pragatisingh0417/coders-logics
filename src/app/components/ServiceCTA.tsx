"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCTA: React.FC = () => {
  return (
    <section
      className="relative w-full py-28 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/about2.jpg')",
      }}
    >
      {/* ---------- OVERLAY ---------- */}
      <div className="absolute inset-0 bg-[#211e59]/85" />

      <div className="relative max-w-7xl mx-auto text-center text-white">

        {/* ---------- HEADING ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Ready to Build a{" "}
          <span className="text-[#98792a]">Scalable Digital Product?</span>
        </motion.h2>

        {/* ---------- DESCRIPTION ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          Partner with CODERS LOGICS to design, develop, and launch secure,
          high-performance digital solutions tailored to your business goals.
          From strategy to long-term support — we’ve got you covered.
        </motion.p>

        {/* ---------- CTA BUTTONS ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-[#98792a]
              text-[#211e59] font-semibold shadow-xl
              hover:opacity-90 transition"
          >
            Get a Free Consultation
          </Link>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-full border-2 border-white
              text-white font-semibold hover:bg-white
              hover:text-[#211e59] transition"
          >
            Talk to Our Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceCTA;
