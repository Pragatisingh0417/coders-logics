"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ---- Projects ---- //
const projects = [
  {
    id: 1,
    title: "Anna Money",
    img: "/finence1.png",
    url: "https://anna.money/",
  },
  {
    id: 2,
    title: "Free Taxusa",
    img: "/finence.png",
    url: "https://www.freetaxusa.com/",
  },
  {
    id: 3,
    title: "Crunch",
    img: "/finence3.png",
    url: "https://www.crunch.co.uk/",
  },
  
];

export default function Finance() {
  return (
    <section className="min-h-screen bg-[#f6f6f6] pb-20">

      {/* ---------------- Hero Section ---------------- */}
      <div className="relative w-full h-[280px] md:h-[380px] mb-16 overflow-hidden">
        <Image
          src="/finencebanner.jpg"
          alt="Healthcare Banner"
          fill
          className="object-cover brightness-[0.55] scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg tracking-wide"
          >
Tax & Accounts          </motion.h1>
        </div>
      </div>

      {/* ---------------- Portfolio Grid ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 relative block"
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#3535ff] transition">
                {project.title}
              </h3>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 
                group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">

              <span className="text-white text-lg font-medium tracking-wide bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                Visit Website →
              </span>

            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
