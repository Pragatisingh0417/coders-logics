"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Code2 } from "lucide-react";

export default function FrameworkEcommerceCTA() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Build with{" "}
              <span className="text-[#98792a]">
                Modern Frameworks & Scalable E-Commerce?
              </span>
            </h3>

            <p className="mt-6 text-lg text-gray-800 max-w-xl">
              Whether you need a powerful web application using Angular,
              Laravel, or Node.js—or a high-converting e-commerce platform—we
              help you build solutions that scale and perform.
            </p>

            <div className="mt-8 flex flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center
                px-8 py-4 rounded-full text-lg font-semibold
                bg-gradient-to-r from-[#98792a] to-[#facc15]
                text-[#0d0f2b] shadow-lg hover:opacity-90 transition"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center
                px-8 py-4 rounded-full text-lg font-semibold
                border border-black/40 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm
              p-8 rounded-2xl border border-black/90 text-center">
              <Code2 className="w-10 h-10 mx-auto text-[#98792a]" />
              <h4 className="mt-4 font-semibold">
                Framework-Driven Development
              </h4>
              <p className="mt-2 text-gray-800 text-sm">
                Angular, Laravel & Node.js solutions built for speed and scale.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm
              p-8 rounded-2xl border border-black/90 text-center">
              <ShoppingCart className="w-10 h-10 mx-auto text-[#98792a]" />
              <h4 className="mt-4 font-semibold">
                E-Commerce Growth Solutions
              </h4>
              <p className="mt-2 text-gray-800 text-sm">
                Conversion-focused online stores that drive revenue.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
