"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaSearch,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

/* ---------- TYPES ---------- */
interface ServiceItem {
  icon: IconType;
  title: string;
  desc: string;
  link: string;
}

/* ---------- DATA ---------- */
const services: ServiceItem[] = [
  {
    icon: FaCode,
    title: "Custom Web Development",
    desc:
      "We build fast, scalable, and secure web applications using modern frameworks and clean architecture tailored to your business needs.",
    link: "/web-development",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc:
      "From idea to deployment, we create high-performance Android and iOS apps with intuitive UI and seamless user experience.",
    link: "/mobile-app-development",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Solutions",
    desc:
      "We develop conversion-driven eCommerce platforms with secure payments, smooth checkout, and scalable backend systems.",
    link: "/ecommerce-development",
  },
  {
    icon: FaSearch,
    title: "SEO & Performance Optimization",
    desc:
      "Improve visibility, speed, and rankings with technical SEO, performance optimization, and search-friendly architecture.",
    link: "/seo-optimization",
  },
  {
    icon: FaBullhorn,
    title: "Digital Growth & Marketing",
    desc:
      "Data-driven digital strategies to grow traffic, leads, and conversions through PPC, analytics, and performance marketing.",
    link: "/digital-marketing",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Maintenance",
    desc:
      "We ensure your applications stay secure, stable, and up-to-date with proactive monitoring, updates, and support.",
    link: "/security-maintenance",
  },
];

/* ---------- COMPONENT ---------- */
const OurServices: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-16 px-6 sm:px-10 py-20">

      {/* ---------- HEADING ---------- */}
      <div className="max-w-7xl space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#211e59] leading-tight">
          Our Services{" "}
        </h2>

        <span className="block h-1 w-24 mx-auto rounded bg-[#98792a]" />

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Coders Logics, we deliver end-to-end digital solutions designed
          to scale, perform, and adapt to modern business challenges.
        </p>
      </div>

      {/* ---------- SERVICES GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">

        {services.map((service, i) => {
          const Icon = service.icon;
          const isPrimaryCard = i % 2 !== 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group rounded-2xl shadow-lg border border-gray-100
                p-8 flex flex-col space-y-5 transition transform hover:-translate-y-2
                ${
                  isPrimaryCard
                    ? "bg-[#211e59] text-white hover:bg-white hover:text-[#211e59]"
                    : "bg-white text-gray-900 hover:bg-[#211e59] hover:text-white"
                }
              `}
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-xl transition-transform duration-300 group-hover:scale-110
                    ${
                      isPrimaryCard
                        ? "bg-white/20 group-hover:bg-[#98792a]/20"
                        : "bg-[#98792a]/20 group-hover:bg-white/20"
                    }
                  `}
                >
                  <Icon
                    className={`text-3xl transition duration-300
                      ${
                        isPrimaryCard
                          ? "text-white group-hover:text-[#211e59]"
                          : "text-[#98792a] group-hover:text-white"
                      }
                    `}
                  />
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p
                className={`text-base leading-relaxed
                  ${
                    isPrimaryCard
                      ? "text-white/90 group-hover:text-gray-700"
                      : "text-gray-700 group-hover:text-white/90"
                  }
                `}
              >
                {service.desc}
              </p>

              {/* CTA */}
              <Link
                href={service.link}
                className={`mt-auto font-semibold inline-flex items-center gap-2 transition-colors
                  ${
                    isPrimaryCard
                      ? "text-white group-hover:text-[#211e59]"
                      : "text-[#211e59] group-hover:text-white"
                  }
                `}
              >
                Learn More →
              </Link>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default OurServices;
