"use client";

import { motion } from "framer-motion";
import {
  Search,
  Share2,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";

export default function DigitalMarketingServices() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your website’s visibility on search engines, drive organic traffic, and rank higher for high-intent keywords.",
      icon: Search,
    },
    {
      title: "Social Media Optimization (SMO)",
      desc: "Build brand awareness and engagement across social platforms with strategic content and audience targeting.",
      icon: Share2,
    },
    {
      title: "Online Reputation Management (ORM)",
      desc: "Protect, monitor, and enhance your brand’s online reputation through reviews, listings, and brand mentions.",
      icon: ShieldCheck,
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      desc: "Generate instant traffic and leads with data-driven paid campaigns on Google, Meta, and other platforms.",
      icon: MousePointerClick,
    },
  ];

  return (
    <section className="py-24 bg-[#211e59]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Our <span className="text-[#98792a]">Digital Marketing</span> Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto"
        >
          We help businesses grow online through strategic digital marketing
          services focused on visibility, engagement, and conversions.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-2xl
                border border-gray-100 shadow-sm hover:shadow-xl
                transition-all text-left"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center
                rounded-xl bg-[#98792a]/10 text-[#98792a] mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#211e59] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover Accent */}
                <div className="absolute inset-0 rounded-2xl
                bg-gradient-to-b from-[#98792a]/10 to-transparent
                opacity-0 group-hover:opacity-100 transition duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Grow Your Business Online?
          </h3>

          <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
            Let our digital marketing experts create a strategy that drives
            traffic, leads, and measurable growth.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 rounded-full
            bg-gradient-to-r from-[#98792a] to-[#facc15]
            text-[#0d0f2b] font-semibold text-lg
            shadow-lg hover:opacity-90 transition"
          >
            Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
