"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function MobileAppPackagesPage() {
  const [billing, setBilling] = useState<"oneTime" | "yearly">("oneTime");

  const packages = [
    {
      name: "Starter App",
      oneTime: 1999,
      yearly: 1699,
      desc: "Ideal for startups and MVP mobile applications.",
      features: [
        "Android OR iOS App",
        "Up to 5 Screens",
        "Basic UI/UX Design",
        "API Integration",
        "App Store / Play Store Deployment",
        "Basic Security Setup",
      ],
    },
    {
      name: "Business App",
      oneTime: 3499,
      yearly: 2999,
      desc: "Perfect for growing businesses and service apps.",
      features: [
        "Android & iOS Apps",
        "Up to 10–12 Screens",
        "Custom UI/UX Design",
        "Backend & API Integration",
        "Push Notifications",
        "App Store & Play Store Publishing",
        "1 Month Free Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise App",
      oneTime: 5999,
      yearly: 5199,
      desc: "Advanced apps with complex features & scalability.",
      features: [
        "Android & iOS Apps",
        "Unlimited Screens",
        "Advanced UI/UX & Animations",
        "Custom Backend & Admin Panel",
        "Payment Gateway Integration",
        "High-Level Security",
        "Performance Optimization",
        "3 Months Free Support",
      ],
    },
  ];

  const getPrice = (pkg: any) => {
    if (billing === "oneTime") return `$${pkg.oneTime} (One-Time)`;
    const discounted = Math.round(pkg.yearly * 0.85); // 15% OFF
    return `$${discounted} / year`;
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
            Mobile App Development{" "}
            <span className="text-[#98792a]">Packages</span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Scalable, secure, and high-performance mobile applications for
            Android and iOS—built to power your business growth.
          </p>
        </div>
      </section>

      {/* BILLING TOGGLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
            Choose Your <span className="text-[#98792a]">App Plan</span>
          </h2>

          <div className="mt-8 inline-flex bg-white rounded-full shadow p-1">
            <button
              onClick={() => setBilling("oneTime")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                billing === "oneTime"
                  ? "bg-[#98792a] text-[#0d0f2b]"
                  : "text-gray-600"
              }`}
            >
              One-Time
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
                  {getPrice(pkg)}
                </div>

                {billing === "yearly" && (
                  <p className="mt-1 text-sm text-gray-500">
                    Includes maintenance, updates & priority support
                  </p>
                )}

                <p className="mt-4 text-gray-600">
                  {pkg.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f: string, idx: number) => (
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
            Need a Custom Mobile App?
          </h3>

          <p className="mt-6 text-lg text-gray-200">
            From MVPs to enterprise-grade apps, our team delivers solutions
            tailored to your vision and users.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 rounded-full
            bg-gradient-to-r from-[#98792a] to-[#facc15]
            text-[#0d0f2b] font-semibold text-lg
            shadow-lg hover:opacity-90 transition"
          >
            Talk to an App Expert →
          </a>
        </div>
      </section>

    </div>
  );
}
