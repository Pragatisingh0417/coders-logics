"use client";

import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export function CrossPlatformApps() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#211e59]">
            Cross-Platform App Development
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Build once, deploy everywhere. We create cost-effective,
            high-performance apps using modern cross-platform frameworks.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✔ Faster development & reduced cost</li>
            <li>✔ Single codebase for Android & iOS</li>
            <li>✔ Native-like performance & UI</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <FaReact className="text-5xl mx-auto text-sky-500" />
            <h4 className="mt-4 font-semibold">React Native</h4>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow text-center">
            <SiFlutter className="text-5xl mx-auto text-blue-500" />
            <h4 className="mt-4 font-semibold">Flutter</h4>
          </div>
        </div>

      </div>
    </section>
  );
}
