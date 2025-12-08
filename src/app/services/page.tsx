"use client";
import { FaLaptopCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import Link from "next/link";

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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          At Coders Logics, we provide end-to-end digital solutions to help your
          business grow and succeed online..
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="text-yellow-600 text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#211e59] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block text-yellow-600 font-semibold hover:underline"
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
