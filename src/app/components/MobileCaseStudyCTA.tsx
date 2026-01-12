"use client";

import { ArrowRight } from "lucide-react";

export function MobileCaseStudyCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#98792a] to-[#0d0f2b] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-3xl md:text-4xl font-bold">
          Mobile Apps That Drive Real Results
        </h3>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Explore how our Android & iOS apps helped businesses increase users,
          engagement, and revenue.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/about"
            className="px-8 py-4 rounded-full bg-[#211e59]
            text-[#fbfbfb] font-semibold flex items-center gap-2"
          >
            Know More <ArrowRight />
          </a>

          <a
            href="/contact"
            className="px-8 py-4 rounded-full border border-white/40"
          >
            Start Your App
          </a>
        </div>
      </div>
    </section>
  );
}
