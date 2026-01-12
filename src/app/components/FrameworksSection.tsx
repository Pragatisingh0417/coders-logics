"use client";

import { FaLaptopCode, FaCogs, FaRocket } from "react-icons/fa";

export function FrameworksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
          Modern <span className="text-[#98792a]">Web Frameworks</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We use proven frameworks to build secure, scalable, and
          high-performance web applications.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
            <FaLaptopCode className="text-4xl text-[#98792a]" />
            <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
              Angular Development
            </h3>
            <p className="mt-3 text-gray-600">
              Enterprise-grade frontend applications with clean architecture
              and performance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
            <FaCogs className="text-4xl text-[#98792a]" />
            <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
              Laravel Development
            </h3>
            <p className="mt-3 text-gray-600">
              Secure, scalable backend systems with powerful APIs and admin
              panels.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border hover:shadow-xl transition">
            <FaRocket className="text-4xl text-[#98792a]" />
            <h3 className="mt-4 text-xl font-semibold text-[#211e59]">
              Node.js Development
            </h3>
            <p className="mt-3 text-gray-600">
              Fast, real-time applications built for scalability and speed.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
