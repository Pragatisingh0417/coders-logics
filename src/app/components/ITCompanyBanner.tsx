"use client";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[650px] md:h-[700px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/coders-banner-1.jpg"
        alt="IT Banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#211e59cc" }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 py-16">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left text-white max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Transforming Businesses
            <br />
            With Smart IT Solutions
          </h1>

          {/* underline svg */}
          <svg
            viewBox="0 0 200 20"
            className="mt-4 w-40 h-6 sm:w-56 sm:h-8 mx-auto md:mx-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#98792a"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>

          <p className="mt-6 text-base sm:text-lg text-gray-100">
            Innovative software development, cloud solutions, and IT consulting
            to help companies grow digitally.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm bg-white/95">

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            Let's Build Something Great
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 text-center">
            Get a free consultation with our IT experts and explore how we can
            transform your business through technology.
          </p>

          <div className="mt-6 flex flex-col gap-4">

            <Link href="/contact" className="w-full">
              <button
                className="w-full px-6 py-3 rounded-full text-white font-semibold shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: "#98792a" }}
              >
                Get Free Consultation
              </button>
            </Link>

            <Link href="/services" className="w-full">
              <button
                className="w-full px-6 py-3 rounded-full text-white font-semibold shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: "#211e59" }}
              >
                Explore Our Services
              </button>
            </Link>

          </div>

          <p className="mt-4 text-xs text-gray-400 text-center">
            Trusted by startups & enterprises worldwide.
          </p>

        </div>

      </div>
    </section>
  );
}