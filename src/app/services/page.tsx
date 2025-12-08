"use client";
import { FaLaptopCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Crafting responsive, high-performance websites using modern technologies. From CMS-based platforms to fully custom web apps, we deliver solutions tailored to your business needs.",
      link: "/website-development",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      description:
        "Building sleek, user-friendly mobile applications for iOS and Android. Our apps are designed to enhance engagement, performance, and scalability.",
      link: "/app-development",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Boost your online presence with data-driven digital marketing. From SEO and social media to PPC and content marketing, we help you reach your audience effectively.",
      link: "/digital-marketing",
    },
  ];

  return (
    <section className="">
      <section className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/networkabout.jpg"
          alt="About Mercy Foundation"
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
            Our Services
          </h1>


        </motion.div>
      </section>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59] mt-10">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          At Coders Logics, we provide end-to-end digital solutions to help your
          business grow and succeed online.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 mb-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-6 mb-4 justify-start">
                <div className="text-[#98792a] text-5xl ">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#211e59] ">
                {service.title}
              </h3>
                </div>

              </div>
              
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block text-[#98792a] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
