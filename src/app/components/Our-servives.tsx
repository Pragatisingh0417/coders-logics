"use client";
import { FaBullhorn, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    desc: "Boost your brand with SEO, SMO, ads & complete digital strategy.",
    icon: <FaBullhorn size={30} />,
    link: "/digital-marketing",
  },
  {
    title: "Website Development",
    desc: "High-performance, responsive and modern websites.",
    icon: <FaLaptopCode size={30} />,
    link: "/website-development",
  },
  {
    title: "App Development",
    desc: "Native & cross-platform mobile apps for iOS & Android.",
    icon: <FaMobileAlt size={30} />,
    link: "/app-development",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#211e59]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold bg-clip-text text-white ">
          Our Services
        </h2>
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          We provide premium IT solutions to help businesses grow efficiently.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-[#211e59] to-[#98792a] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-white rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-gray-50 group-hover:-translate-y-2 ">

                {/* Icon */}
                <div className="flex text-center align-middle  gap-3 ">
                <div className="h-12 w-12 rounded-2xl flex items-center justify-center 
                bg-gradient-to-br from-[#211e59]/10 to-yellow-600/20 
                text-[#211e59] shadow-inner ">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#211e59]">{s.title}</h3>
                </div>
                </div>

                {/* Title */}
                

                {/* Description */}
                <p className="mt-3 text-gray-600">{s.desc}</p>

                {/* Button */}
                <Link href={s.link}>
                  <button className="mt-6 w-full py-3 rounded-full font-medium text-white 
                  bg-gradient-to-r from-[#211e59] to-[#98792a]
                  hover:opacity-90 transition">
                    Know More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
