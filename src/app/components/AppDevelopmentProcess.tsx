"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function AppDevelopmentProcess() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Understanding goals & users." },
    { step: "02", title: "UI/UX Design", desc: "Wireframes & app design." },
    { step: "03", title: "Development", desc: "Android & iOS coding." },
    { step: "04", title: "Launch", desc: "Store deployment & support." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
          Our App <span className="text-[#98792a]">Development Process</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {steps.map((s, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl shadow">
              <div className="text-4xl font-bold text-[#98792a]">{s.step}</div>
              <h4 className="mt-4 font-semibold text-[#211e59]">{s.title}</h4>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
