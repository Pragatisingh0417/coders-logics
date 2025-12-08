"use client";

import {
  FaHospital,
  FaDumbbell,
  FaHome,
  FaSpa,
  FaBroom,
  FaTruck,
  FaBuilding,
  FaShoppingCart,
  FaUtensils,
  FaHotel,
  FaTools,
  FaCalculator,
  FaCar,
  FaLeaf,
  FaHardHat,
  FaPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Portfolio() {
  const industries = [
    { icon: <FaHospital />, title: "Healthcare & Home Care" },

    { icon: <FaDumbbell />, title: "Wellness, Fitness & Yoga" },

    { icon: <FaHome />, title: "Home Services & Construction" },

    { icon: <FaBuilding />, title: "Real Estate & Infrastructure" },

    { icon: <FaShoppingCart />, title: "E-commerce" },

    { icon: <FaUtensils />, title: "Food & Restaurant" },

    { icon: <FaTruck />, title: "Logistics & Transportation" },

    { icon: <FaHotel />, title: "Hotels, Travel & Tours" },

    { icon: <FaCalculator />, title: "Finance & Accounting" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
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

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center border"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex items-center gap-3 justify-start">
                <div className="text-4xl text-[#211e59]  ">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
