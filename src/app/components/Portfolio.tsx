"use client";

import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaHospital,
  FaHome,
  FaBuilding,
  FaShoppingCart,
  FaUtensils,
  FaTruck,
  FaHotel,
  FaCalculator,
} from "react-icons/fa";

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  link: string;
}

export default function Portfolio() {
  const industries: IndustryItem[] = [
    {
      icon: <FaHospital />,
      title: "Healthcare & Wellness",
      link: "/healthcare&homecare",
    },
    {
      icon: <FaHome />,
      title: "Home Services",
      link: "/homeservices",
    },
    {
      icon: <FaBuilding />,
      title: "Real Estate & Infrastructure",
      link: "/realestate",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce",
      link: "/e-commerce",
    },
    {
      icon: <FaUtensils />,
      title: "Food & Restaurant",
      link: "/food",
    },
    {
      icon: <FaTruck />,
      title: "Logistics & Transportation",
      link: "/logistics",
    },
    {
      icon: <FaHotel />,
      title: "Hotels, Travel & Tours",
      link: "/hotel-tour-and-travel-portfolio",
    },
    {
      icon: <FaCalculator />,
      title: "Finance & Accounting",
      link: "/finance",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.45,
      },
    }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          Industries We Serve
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Delivering complete digital and IT solutions for multiple industry segments.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <Link key={index} href={item.link} className="block">
              <motion.div
                className="p-8 bg-gray-50 rounded-2xl shadow border
                           hover:shadow-xl hover:-translate-y-1
                           transition cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.04 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl text-[#211e59]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#98792a]">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
