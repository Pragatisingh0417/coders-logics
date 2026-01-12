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
     <section
        className="relative flex items-center
          min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
          bg-cover bg-center bg-no-repeat
          text-white overflow-hidden"
        style={{
          backgroundImage: "url('/CONTACT-BANNER-CODERS.jpg')",
        }}
      >
        {/* DARK OVERLAY (for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r
          from-[#0d0f2b]/90 via-[#211e59]/75 to-[#98792a]/70"></div>

        {/* Decorative glows */}
        <div className="absolute -top-10 -left-10 h-52 w-52 bg-[#98792a]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-400/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
CONTACT US                   </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
Get in touch with Coders Logics to discuss your project, ideas, or business goals.
Our team is ready to help you build scalable, high-performance digital solutions.

            </p>

            <div className="mt-8 flex flex-row gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center
                  px-8 py-4 rounded-full text-lg font-semibold
                  bg-gradient-to-r from-[#98792a] to-[#facc15]
                  text-[#0d0f2b] shadow-lg hover:opacity-90 transition"
              >
                Start Your Project →
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center
                  px-8 py-4 rounded-full text-lg font-semibold
                  border border-white/40 hover:bg-white/10 transition"
              >
                Know More
              </a>
            </div>
          </motion.div>
        </div>
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
Info@coderslogics.com                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#211e59] text-white rounded-xl shadow">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <p>
                  <span className="font-semibold">Address:</span> USA – Texas, Austin, TX 78701, USA
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

      {/* ================= GOOGLE MAP ================= */}
<section className="w-full bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-2xl md:text-3xl font-bold text-[#211e59] text-center mb-10"
    >
      Our Location
    </motion.h3>

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full h-[300px] sm:h-[400px] md:h-[450px]
      rounded-3xl overflow-hidden shadow-xl border"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55129.92175294454!2d-97.79197209975901!3d30.276403500463008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a09f79a589%3A0x4b5d42b7eafac86d!2sAustin%2C%20TX%2078701%2C%20USA!5e0!3m2!1sen!2sin!4v1768241378390!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>

  </div>
</section>

    </section>
  );
}
