"use client";

import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { SiKotlin, SiSwift, SiFlutter  } from "react-icons/si";

export function MobileTechStack() {
  return (
    <section className="py-24 bg-[#211e59]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#f6f6f6]">
          Android & iOS <span className="text-[#98792a]">Tech Stack</span>
        </h2>

        <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
          We use proven, scalable technologies to build high-performance mobile
          applications for both Android and iOS platforms.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* ANDROID */}
          <div className="bg-gray-50 p-10 rounded-3xl text-left shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FaAndroid className="text-4xl text-green-600" />
              <h3 className="text-2xl font-semibold text-[#211e59]">
                Android Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="badge"><SiKotlin /> Kotlin</span>
              <span className="badge"><FaReact /> React Native</span>
              <span className="badge"><SiFlutter  /> Flutter</span>
            </div>

            <p className="mt-6 text-gray-600">
              Optimized apps built for performance, security, and scalability on
              Android devices.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <img src="/playstore-svg.png" alt="Play Store" className="h-10" />
            </div>
          </div>

          {/* IOS */}
          <div className="bg-gray-50 p-10 rounded-3xl text-left shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FaApple className="text-4xl text-black" />
              <h3 className="text-2xl font-semibold text-[#211e59]">
                iOS Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="badge"><SiSwift /> Swift</span>
              <span className="badge"><FaReact /> React Native</span>
              <span className="badge"><SiFlutter  /> Flutter</span>
            </div>

            <p className="mt-6 text-gray-600">
              Clean, secure, and user-friendly apps built for Apple’s ecosystem.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <img src="/appstore.svg" alt="App Store" className="h-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
