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
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          Technologies We Use
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We use cutting-edge tools to deliver fast, secure, and scalable
          digital solutions.
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
