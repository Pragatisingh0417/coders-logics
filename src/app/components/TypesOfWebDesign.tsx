"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Layers,
  FileText,
  Layout,
  Scroll,
  Code,
} from "lucide-react";

export default function CodersLogicsWebDesignTypes() {
  const types = [
    {
      title: "Static Business Websites",
      description:
        "Fast-loading, secure, and cost-effective websites ideal for startups, landing pages, and company profiles with minimal content updates.",
      icon: FileText,
      color: "from-[#211e59]/10 to-[#211e59]/20 text-[#211e59]",
    },
    {
      title: "Responsive Web Design",
      description:
        "Pixel-perfect layouts that adapt seamlessly across desktops, tablets, and mobiles—ensuring a consistent user experience everywhere.",
      icon: Monitor,
      color: "from-[#98792a]/10 to-[#98792a]/20 text-[#98792a]",
    },
    {
      title: "Single Page Applications (SPA)",
      description:
        "Modern, lightning-fast interfaces built using React and Next.js for smooth navigation and app-like performance.",
      icon: Layout,
      color: "from-indigo-100 to-indigo-200 text-indigo-600",
    },
    {
      title: "Dynamic & CMS-Based Websites",
      description:
        "Content-driven platforms powered by CMS and databases, enabling easy updates, scalability, and personalized user experiences.",
      icon: Layers,
      color: "from-emerald-100 to-emerald-200 text-emerald-600",
    },
    {
      title: "Mobile-First Design",
      description:
        "Designs crafted starting from mobile screens to ensure superior usability, performance, and engagement on smaller devices.",
      icon: Smartphone,
      color: "from-sky-100 to-sky-200 text-sky-600",
    },
    {
      title: "Interactive & Animated Interfaces",
      description:
        "Smooth animations, micro-interactions, and scroll effects that elevate brand perception and keep users engaged.",
      icon: Scroll,
      color: "from-rose-100 to-rose-200 text-rose-600",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f7f8ff] to-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#211e59]"
        >
          Website Design Approaches at{" "}
          <span className="text-[#98792a]">CODERS LOGICS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We don’t believe in one-size-fits-all solutions. At CODERS LOGICS, we
          design and develop websites using the right approach that aligns with
          your business goals, users, and future growth.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-left
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl
                bg-gradient-to-br ${type.color} mb-5`}
              >
                <type.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#211e59] transition">
                {type.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
