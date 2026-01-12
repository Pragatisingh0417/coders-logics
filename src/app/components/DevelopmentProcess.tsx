"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function DevelopmentProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
          Our 4-Step <span className="text-[#98792a]">Development</span> Process
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          A transparent, structured workflow designed to deliver scalable,
          high-quality digital solutions—on time and on point.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {[
            {
              num: "01",
              title: "Planning & Discovery",
              desc: "Understanding business goals, users, and technical requirements.",
              icon: Search,
            },
            {
              num: "02",
              title: "UI/UX Design",
              desc: "Designing intuitive, modern interfaces focused on user experience.",
              icon: PenTool,
            },
            {
              num: "03",
              title: "Development",
              desc: "Building secure, scalable, and high-performance solutions.",
              icon: Code2,
            },
            {
              num: "04",
              title: "Launch & Growth",
              desc: "Smooth deployment, testing, and continuous optimization.",
              icon: Rocket,
            },
          ].map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-8 rounded-2xl bg-white
                border border-gray-100 shadow-sm hover:shadow-xl
                transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center
                rounded-xl bg-[#98792a]/10 text-[#98792a] mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Step Number */}
                <div className="text-4xl font-bold text-[#98792a]/70">
                  {step.num}
                </div>

                {/* Title */}
                <h4 className="mt-4 text-lg font-semibold text-[#211e59]">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Hover glow */}
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#211e59]">
            Ready to Build Something Exceptional?
          </h3>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Let’s turn your idea into a high-performing digital product with a
            proven development process.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 rounded-full
            bg-gradient-to-r from-[#98792a] to-[#facc15]
            text-[#211e59] font-semibold text-lg
            shadow-lg hover:opacity-90 transition"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
