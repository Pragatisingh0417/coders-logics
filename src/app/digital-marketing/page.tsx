"use client";
import { FaBullhorn, FaChartLine, FaSearch, FaShareAlt } from "react-icons/fa";

export default function DigitalMarketingPage() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-r from-[#211e59] to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Digital Marketing</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Grow your brand with SEO, SMO, Ads, and full-funnel marketing strategies.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#211e59] text-center">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            { icon: <FaSearch size={30} />, title: "SEO Optimization", desc: "Rank #1 on Google with advanced SEO." },
            { icon: <FaShareAlt size={30} />, title: "Social Media Marketing", desc: "Grow followers and brand awareness." },
            { icon: <FaChartLine size={30} />, title: "Paid Ads", desc: "High-ROI Facebook, Google & Instagram ads." },
          ].map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="h-16 w-16 bg-yellow-600/15 text-[#211e59] flex items-center justify-center rounded-xl">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#211e59]">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#211e59]">Ready to Grow Your Business?</h2>
        <p className="mt-4 text-gray-600">Let’s build your online presence with powerful marketing strategies.</p>
        <a href="/contact" className="inline-block mt-6 px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#211e59] to-yellow-600 hover:opacity-90">
          Book a Consultation →
        </a>
      </section>
    </div>
  );
}
