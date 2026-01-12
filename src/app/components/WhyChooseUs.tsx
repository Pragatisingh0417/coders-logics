"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Headphones, BarChart3 } from "lucide-react";

const reasons = [
  {
    title: "Expert Team",
    desc: "Seasoned engineers and consultants delivering reliable solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Technology",
    desc: "Scalable, secure, and future-ready technology stacks.",
    icon: Cpu,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Always-on support to keep your business running smoothly.",
    icon: Headphones,
  },
  {
    title: "Proven Results",
    desc: "Solutions focused on measurable growth and performance.",
    icon: BarChart3,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#211e59]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* SECTION HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Why Choose <span className="text-[#98792a]">CODERS LOGICS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto"
        >
          We combine deep technical expertise, modern development practices,
          and a client-first mindset to build solutions that truly make an impact.
        </motion.p>

        {/* CARDS GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-2xl
                shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r
                from-[#98792a] to-[#facc15] opacity-0 group-hover:opacity-100
                transition duration-300 -z-10 blur-lg"></div>

                {/* Icon */}
                <Icon className="w-12 h-12 mx-auto text-[#98792a]
                group-hover:text-[#facc15] transition-colors duration-300" />

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-[#211e59]">
                  {r.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
