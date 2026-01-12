"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react";

export default function CaseStudyCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#98792a] via-[#a08133] to-[#98792a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Real Results from Our{" "}
              <span className="text-[#211e59]">Digital Marketing Campaigns</span>
            </h3>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We don’t just run campaigns — we deliver measurable growth.
              Explore how our SEO, PPC, SMO, and ORM strategies helped
              businesses increase traffic, leads, and ROI.
            </p>

            <div className="mt-8 flex flex-row gap-4">
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center
                px-8 py-4 rounded-full text-lg font-semibold
                bg-gradient-to-r from-[#211e59] to-[#211e59]
                text-[#f3f3f3] shadow-lg hover:opacity-90 transition"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center
                px-8 py-4 rounded-full text-lg font-semibold
                border border-white/40 hover:bg-white/10 transition"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8"
          >
            {[
              {
                icon: TrendingUp,
                value: "250%+",
                label: "Traffic Growth",
              },
              {
                icon: Users,
                value: "3X",
                label: "Lead Conversion",
              },
              {
                icon: BarChart3,
                value: "5X",
                label: "ROI Improvement",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm
                  rounded-2xl p-6 text-center border border-white/20"
                >
                  <Icon className="w-10 h-10 mx-auto text-[#211e59]" />
                  <div className="mt-4 text-3xl font-bold">
                    {item.value}
                  </div>
                  <p className="mt-2 text-gray-200">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
