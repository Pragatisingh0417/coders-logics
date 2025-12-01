"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

export default function WebsiteDevelopmentPage() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-r from-[#211e59] to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Website Development</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Modern, responsive, high-converting websites built with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#211e59] text-center">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            { icon: <FaLaptopCode size={30} />, title: "Custom Websites", desc: "Tailored design & functionality." },
            { icon: <FaMobileAlt size={30} />, title: "Fully Responsive", desc: "Optimized for all devices." },
            { icon: <FaRocket size={30} />, title: "High Performance", desc: "Lightning-fast loading & SEO ready." },
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
        <h2 className="text-3xl font-bold text-[#211e59]">Build Your Dream Website</h2>
        <p className="mt-4 text-gray-600">Let’s create something exceptional together.</p>
        <a href="/contact" className="inline-block mt-6 px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#211e59] to-yellow-600 hover:opacity-90">
          Get Started →
        </a>
      </section>
    </div>
  );
}
