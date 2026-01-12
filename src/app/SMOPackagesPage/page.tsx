"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function SMOPackagesPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const packages = [
    {
      name: "Starter",
      monthly: 149,
      desc: "Perfect for small businesses starting social media presence.",
      features: [
        "2 Social Media Platforms",
        "8–10 Posts / Month",
        "Basic Content Creation",
        "Profile Optimization",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Growth",
      monthly: 249,
      desc: "Ideal for growing brands focused on engagement & reach.",
      features: [
        "3–4 Social Media Platforms",
        "12–16 Posts / Month",
        "Creative Graphics & Captions",
        "Hashtag & Trend Research",
        "Audience Engagement",
        "Bi-Weekly Performance Report",
      ],
      highlight: true,
    },
    {
      name: "Advanced",
      monthly: 399,
      desc: "Best for brands aiming for aggressive growth & visibility.",
      features: [
        "All Major Social Platforms",
        "20–30 Posts / Month",
        "Advanced Content Strategy",
        "Community Management",
        "Competitor Analysis",
        "Weekly Performance Reports",
      ],
    },
  ];

  const getPrice = (monthly: number) => {
    if (billing === "monthly") return `$${monthly} / month`;
    const yearly = Math.round(monthly * 12 * 0.85); // 15% OFF
    return `$${yearly} / year`;
  };

  return (
    <div className="bg-white w-full">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-r from-[#211e59] via-[#1b1b3a] to-[#0d0f2b] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
          >
            Social Media Optimization{" "}
            <span className="text-[#98792a]">Packages</span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Grow your brand, boost engagement, and build a loyal audience with
            our result-driven SMO plans.
          </p>
        </div>
      </section>

      {/* BILLING TOGGLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
            Choose Your <span className="text-[#98792a]">SMO Plan</span>
          </h2>

          <div className="mt-8 inline-flex bg-white rounded-full shadow p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                billing === "monthly"
                  ? "bg-[#98792a] text-[#0d0f2b]"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                billing === "yearly"
                  ? "bg-[#98792a] text-[#0d0f2b]"
                  : "text-gray-600"
              }`}
            >
              Yearly <span className="ml-1 text-sm">(15% OFF)</span>
            </button>
          </div>

          {/* PACKAGES */}
          <div className="grid lg:grid-cols-3 gap-10 mt-16">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-3xl border
                shadow-sm hover:shadow-xl transition-all
                bg-white ${
                  pkg.highlight
                    ? "border-[#98792a] scale-105"
                    : "border-gray-100"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2
                  bg-[#98792a] text-[#0d0f2b] text-sm font-semibold
                  px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-[#211e59]">
                  {pkg.name}
                </h3>

                <div className="mt-4 text-3xl font-bold text-[#98792a]">
                  {getPrice(pkg.monthly)}
                </div>

                {billing === "yearly" && (
                  <p className="mt-1 text-sm text-gray-500">
                    Billed yearly — save 15%
                  </p>
                )}

                <p className="mt-4 text-gray-600">
                  {pkg.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <Check className="w-5 h-5 text-[#98792a]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center
                  mt-8 w-full px-6 py-3 rounded-full
                  bg-gradient-to-r from-[#98792a] to-[#facc15]
                  text-[#0d0f2b] font-semibold
                  hover:opacity-90 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Need a Custom SMO Strategy?
          </h3>

          <p className="mt-6 text-lg text-gray-200">
            Talk to our experts and get a tailored social media plan based on
            your goals and industry.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 rounded-full
            bg-gradient-to-r from-[#98792a] to-[#facc15]
            text-[#0d0f2b] font-semibold text-lg
            shadow-lg hover:opacity-90 transition"
          >
            Talk to an Expert →
          </a>
        </div>
      </section>

    </div>
  );
}
