"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Headphones, BarChart3 } from "lucide-react";

const reasons = [
  {
    title: "Expert Team",
    desc: "Seasoned engineers & consultants.",
    icon: ShieldCheck,
  },
  {
    title: "Cutting-edge Tech",
    desc: "We use modern, scalable stacks.",
    icon: Cpu,
  },
  {
    title: "24/7 Support",
    desc: "Reliable support when you need it.",
    icon: Headphones,
  },
  {
    title: "Proven Results",
    desc: "Delivering measurable business outcomes.",
    icon: BarChart3,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#211e59]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-gray-200 max-w-2xl mx-auto"
        >
          We combine experience, innovation, and a client-first approach to deliver exceptional IT services.
        </motion.p>

        {/* GRID */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
                className="group relative bg-white p-7 rounded-2xl shadow-xl transition-transform cursor-pointer"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fb923c] to-[#facc15] opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>

                {/* Icon with animation */}
                <Icon className="w-12 h-12 mx-auto text-[#fb923c] group-hover:text-[#facc15] transition-colors duration-300" />

                <h3 className="text-xl font-semibold text-[#211e59] mt-4">
                  {r.title}
                </h3>

                <p className="mt-2 text-gray-600">
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
