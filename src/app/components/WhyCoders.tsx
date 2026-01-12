"use client";

import { ShieldCheck, Cpu, Headphones, BarChart3 } from "lucide-react";

export function WhyCoders() {
  const items = [
    {
      title: "Experienced Engineers",
      desc: "Skilled developers with real-world project experience.",
      icon: ShieldCheck,
    },
    {
      title: "Modern Tech Stack",
      desc: "Latest frameworks, tools, and best practices.",
      icon: Cpu,
    },
    {
      title: "Reliable Support",
      desc: "Ongoing maintenance and technical assistance.",
      icon: Headphones,
    },
    {
      title: "Proven Results",
      desc: "Solutions focused on growth and performance.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 bg-[#211e59] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-[#98792a]">CODERS LOGICS</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white text-gray-800 p-8 rounded-2xl
                shadow hover:shadow-xl transition"
              >
                <Icon className="w-10 h-10 mx-auto text-[#98792a]" />
                <h3 className="mt-4 font-semibold text-[#211e59]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
