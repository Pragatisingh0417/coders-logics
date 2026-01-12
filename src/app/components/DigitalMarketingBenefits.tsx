"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Globe,
  Wallet,
} from "lucide-react";

export default function DigitalMarketingBenefits() {
  const benefits = [
    {
      title: "Increased Online Visibility",
      desc: "Reach the right audience across search engines, social media, and digital platforms.",
      icon: Globe,
    },
    {
      title: "Targeted Audience Reach",
      desc: "精准 targeting ensures your brand connects with users most likely to convert.",
      icon: Target,
    },
    {
      title: "Cost-Effective Marketing",
      desc: "Achieve better ROI compared to traditional marketing with data-driven campaigns.",
      icon: Wallet,
    },
    {
      title: "Measurable Results",
      desc: "Track performance in real-time using analytics, insights, and reporting tools.",
      icon: BarChart3,
    },
    {
      title: "Higher Engagement",
      desc: "Build stronger relationships through personalized and interactive campaigns.",
      icon: Users,
    },
    {
      title: "Scalable Business Growth",
      desc: "Easily scale campaigns as your business grows without heavy upfront costs.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#211e59]"
        >
          Benefits of <span className="text-[#98792a]">Digital Marketing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Digital marketing empowers businesses to reach the right audience,
          improve brand visibility, and drive measurable growth in a competitive
          digital landscape.
        </motion.p>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

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
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
