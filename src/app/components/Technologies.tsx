"use client";

import React from "react";
import { IconType } from "react-icons";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

/* ---------- TYPES ---------- */
interface TechnologyItem {
  icon: IconType;
  title: string;
  description: string;
  tools: string[];
}

/* ---------- DATA ---------- */
const technologies: TechnologyItem[] = [
  {
    icon: FaLaptopCode,
    title: "Frontend Development",
    description:
      "Modern, responsive, and performance-optimized user interfaces built for scalability.",
    tools: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Robust server-side systems designed for security, performance, and future growth.",
    tools: ["Node.js", "Express", "Laravel", "Django", "Spring Boot"],
  },
  {
    icon: FaDatabase,
    title: "Database & Storage",
    description:
      "Reliable and scalable data solutions with high availability and optimized queries.",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "High-performance mobile applications with native-like experience across platforms.",
    tools: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design",
    description:
      "User-centric designs focused on usability, clarity, and consistent brand experience.",
    tools: ["Figma", "Adobe XD", "Sketch", "Canva"],
  },
];

/* ---------- COMPONENT ---------- */
const TechnologySection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ---------- HEADER ---------- */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#211e59] leading-tight">
            Technologies Powering{" "}
            <span className="text-[#98792a]">Coders Logics</span>
          </h2>

          <span className="block w-24 h-1 bg-[#211e59] mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At Coders Logics, we use a carefully selected technology stack
            to build secure, scalable, and high-performing digital products.
            Our tools enable faster development, cleaner code, and long-term
            maintainability.
          </p>
        </div>

        {/* ---------- TECHNOLOGY GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md
                  hover:shadow-xl transition duration-300
                  border border-gray-100 hover:border-[#211e59]/30"
              >
                <div className="flex flex-col items-center h-full">

                  {/* ICON */}
                  <div className="p-4 rounded-xl bg-[#211e59]/10 mb-4
                    group-hover:bg-[#211e59] transition"
                  >
                    <Icon className="text-3xl text-[#211e59] group-hover:text-white transition" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tech.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* TOOLS */}
                  <ul className="mt-auto space-y-1 text-base text-gray-700">
                    {tech.tools.map((tool, i) => (
                      <li
                        key={i}
                        className="relative pl-4 before:absolute before:left-0 before:top-2
                          before:w-2 before:h-2 before:rounded-full before:bg-[#98792a]"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
