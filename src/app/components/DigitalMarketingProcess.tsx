"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  Megaphone,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export default function DigitalMarketingProcess() {
  const steps = [
    {
      step: "01",
      title: "Research & Audit",
      desc: "Analyze market, competitors, keywords, and audience behavior.",
      icon: Search,
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "Define channels, goals, KPIs, and campaign roadmap.",
      icon: Target,
    },
    {
      step: "03",
      title: "Campaign Execution",
      desc: "Launch SEO, PPC, SMO, and ORM campaigns effectively.",
      icon: Megaphone,
    },
    {
      step: "04",
      title: "Tracking & Optimization",
      desc: "Monitor analytics, test variations, and improve performance.",
      icon: BarChart3,
    },
    {
      step: "05",
      title: "Scaling & Growth",
      desc: "Scale winning campaigns to maximize ROI and growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
          Our Digital Marketing{" "}
          <span className="text-[#98792a]">Growth Process</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          A data-driven, results-focused approach designed to increase traffic,
          conversions, and long-term brand growth.
        </p>

        <div className="grid md:grid-cols-5 gap-8 mt-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-xl transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center
                  rounded-xl bg-[#98792a]/10 text-[#98792a] mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl font-bold text-[#98792a]/70">
                  {step.step}
                </div>

                <h4 className="mt-4 font-semibold text-[#211e59]">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm text-gray-600">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
