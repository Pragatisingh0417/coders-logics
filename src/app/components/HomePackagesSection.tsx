"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Share2,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function HomePackagesSection() {
  const packages = [
    {
      title: "Website Development",
      desc: "Professional, responsive websites built to convert visitors into customers.",
      icon: Globe,
      link: "/website-packages",
      cta: "View Website Packages",
    },
    {
      title: "SEO Services",
      desc: "Improve search rankings, drive organic traffic, and grow your visibility.",
      icon: Search,
      link: "/seo-packages",
      cta: "View SEO Packages",
    },
    {
      title: "SMO Services",
      desc: "Build brand awareness and engagement across social media platforms.",
      icon: Share2,
      link: "/smo-packages",
      cta: "View SMO Packages",
    },
    {
      title: "Mobile App Development",
      desc: "High-performance Android & iOS apps designed for scale and growth.",
      icon: Smartphone,
      link: "/mobile-app-packages",
      cta: "View App Packages",
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
          Our <span className="text-[#98792a]">Packages</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto"
        >
          Choose from our flexible packages designed to meet different business
          needs—whether you’re launching, scaling, or optimizing for growth.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;

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
                transition-all text-left flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center
                rounded-xl bg-[#98792a]/10 text-[#98792a] mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#211e59] mb-3">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {pkg.desc}
                </p>

                {/* CTA */}
                <a
                  href={pkg.link}
                  className="inline-flex items-center mt-6
                  text-[#98792a] font-semibold hover:underline"
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
