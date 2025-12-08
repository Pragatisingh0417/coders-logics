"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/networkabout.jpg"
          alt="Contact Us"
          fill
          className="object-cover scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col justify-center px-6 max-w-6xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-snug">
            Contact Us
          </h1>
        </motion.div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#211e59] text-center mb-14"
        >
          Get in Touch with Our Team
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ================= LEFT CONTACT DETAILS – MODERN GLASS CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-[#211e59] mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions? Need support? Our team is always ready to help you
              with your project requirements. Reach out anytime.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#211e59] text-white rounded-xl shadow">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <p>
                  <span className="font-semibold">Phone:</span> +91 98917 61366
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#211e59] text-white rounded-xl shadow">
                  <FaEnvelope className="text-xl" />
                </div>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  info@yourdomain.com
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#211e59] text-white rounded-xl shadow">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <p>
                  <span className="font-semibold">Address:</span> Delhi NCR,
                  India
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#211e59] text-white rounded-xl shadow">
                  <FaClock className="text-xl" />
                </div>
                <p>
                  <span className="font-semibold">Working Hours:</span> Mon–Sat,
                  9 AM – 7 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT MODERN FLOATING LABEL FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl bg-white shadow-xl border"
          >
            <h3 className="text-2xl font-semibold text-[#211e59] mb-8">
              Send Us a Message
            </h3>

            <div className="space-y-6">

              {/* Floating Label Group */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border px-4 py-3 rounded-lg bg-transparent border-gray-300 focus:border-[#211e59] focus:ring-0 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#211e59] peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full border px-4 py-3 rounded-lg bg-transparent border-gray-300 focus:border-[#211e59] focus:ring-0 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#211e59] peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border px-4 py-3 rounded-lg bg-transparent border-gray-300 focus:border-[#211e59] focus:ring-0 outline-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#211e59] peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <textarea
                  required
rows={5}
                  className="peer w-full border px-4 py-3 rounded-lg bg-transparent border-gray-300 focus:border-[#211e59] focus:ring-0 outline-none"
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#211e59] peer-valid:-top-2 peer-valid:text-xs bg-white px-1">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#211e59] to-[#3f3aa3] shadow-lg hover:shadow-xl transition"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
