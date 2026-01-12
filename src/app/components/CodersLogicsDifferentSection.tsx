"use client";

import { IconType } from "react-icons";
import {
  FaUsers,
  FaCheckCircle,
  FaSearch,
  FaGavel,
  FaProjectDiagram,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";

/* ---------- TYPES ---------- */
interface StatItem {
  icon: IconType;
  value: string;
  label: string;
}

/* ---------- DATA ---------- */
const stats: StatItem[] = [
  {
    icon: FaUsers,
    value: "15K+",
    label: "Users Engagement",
  },
  {
    icon: FaCheckCircle,
    value: "100%",
    label: "Guaranteed Delivery",
  },
  {
    icon: FaSearch,
    value: "Free",
    label: "Business Analysis",
  },
  {
    icon: FaGavel,
    value: "Strict",
    label: "Penalty Enforcement",
  },
  {
    icon: FaProjectDiagram,
    value: "2500+",
    label: "Projects Delivered",
  },
  // {
  //   icon: FaLaptopCode,
  //   value: "9+ Years",
  //   label: "IT Industry Exposure",
  // },
];

/* ---------- COMPONENT ---------- */
const CodersLogicsDifferentSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 text-center mt-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* ---------- HEADING ---------- */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What Makes{" "}
          <span className="text-[#211e59]">CODERS LOGICS</span>{" "}
          Different?
        </h2>

        {/* ---------- DESCRIPTION ---------- */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-14 max-w-3xl mx-auto">
          CODERS LOGICS is not just a development company — it’s a
          technology-driven team focused on building scalable, secure,
          and future-ready digital solutions. We combine real-world
          experience with agile execution to deliver measurable results.
        </p>

        {/* ---------- STATS GRID ---------- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <Icon className="text-3xl text-[#98792a] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#211e59] mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-700 font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}

          {/* ---------- WIDE CARD ---------- */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition col-span-2 md:col-span-3 lg:col-span-2">
            <FaHeadset className="text-3xl text-[#98792a] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#211e59] mb-2">
              24×7
            </h3>
            <p className="text-gray-700 font-medium">
              Dedicated Support Availability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CodersLogicsDifferentSection;
