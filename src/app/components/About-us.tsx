"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaUsers, FaAward, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT IMAGE WITH GRADIENT BORDER */}
        <div className="md:w-1/2 relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#211e59]   group-hover:blur-sm transition"></div>

          <Image
            src="/about2.jpg"
            alt="About Coders Logics"
            width={700}
            height={460}
            className="relative rounded-3xl shadow-xl border border-white/20"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
            Empowering Businesses with Modern IT Solutions
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
           At CodersLogics, we help businesses shine online. With extensive experience in developing CMS-based websites and custom web solutions, we craft digital experiences that not only look amazing but also deliver measurable results.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">

            Our focus is on understanding your business, your audience, and your goals — so every website we build is tailored to your unique needs. From sleek CMS websites to fully customized web applications, we provide solutions that enhance your digital presence, engage your audience, and drive growth.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-yellow-600 text-2xl" />
              <p className="text-gray-700">Next-gen Web & App Solutions</p>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-600 text-2xl" />
              <p className="text-gray-700">Scalable & Secure Systems</p>
            </div>

            <div className="flex items-center gap-3">
              <FaUsers className="text-yellow-600 text-2xl" />
              <p className="text-gray-700">Experienced IT Experts</p>
            </div>

            <div className="flex items-center gap-3">
              <FaAward className="text-yellow-600 text-2xl" />
              <p className="text-gray-700">Client-Focused Approach</p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="/about"
            className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#211e59] to-yellow-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
