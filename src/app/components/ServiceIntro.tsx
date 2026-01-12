"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceIntro: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ---------- LEFT : CONTENT ---------- */}
          <div className="text-center lg:text-left">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#211e59] leading-tight"
            >
              Building Scalable Digital Solutions That{" "}
              <span className="text-[#98792a]">Drive Real Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              At CODERS LOGICS, we design and develop secure, high-performance
              digital products tailored to your business goals. From startups
              to enterprises, our solutions are engineered for scalability,
              speed, and long-term success.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We focus on clean architecture, modern technologies, and proven
              development practices to build systems that are reliable today
              and future-ready tomorrow.
            </motion.p>

            {/* ---------- VALUE POINTS ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                "Scalable Architecture",
                "Security-First Development",
                "High Performance",
                "Long-Term Support",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#211e59]/10 text-[#211e59] text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* ---------- CTA BUTTONS ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full text-white bg-[#211e59]
                font-semibold shadow-lg hover:opacity-90 transition"
              >
                Get a Free Consultation
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-[#211e59]
                text-[#211e59] font-semibold hover:bg-[#211e59]
                hover:text-white transition"
              >
                Talk to Our Experts
              </Link>
            </motion.div>
          </div>

          {/* ---------- RIGHT : IMAGE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/e-combanne.jpeg"
                alt="CODERS LOGICS digital solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
