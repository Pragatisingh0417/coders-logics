"use client";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  
  SiTailwindcss,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export default function Technologies() {
  const techStack = [
    { icon: <SiNextdotjs />, name: "Healthcare & Home Care" },
    { icon: <SiReact />, name: "Wellness, Fitness & Yoga " },
    { icon: <SiNodedotjs />, name: "Home Services & Construction" },
    { icon: <SiMongodb />, name: "Real Estate & Infrastructure" },
     { icon: <SiMongodb />, name: "E-commerce" },
      { icon: <SiMongodb />, name: "Food & Restaurant" },
       { icon: <SiMongodb />, name: "Logistics & Transportation" },
        { icon: <SiMongodb />, name: "Hotels, Travel & Tours" },

    
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          Industries We Deal With
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Work with a leading Industries web design company to create a custom, high-performance site that drives traffic, builds trust and grows your patient base.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-4xl text-[#211e59] mb-3">{tech.icon}</div>
              <p className="font-semibold text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
