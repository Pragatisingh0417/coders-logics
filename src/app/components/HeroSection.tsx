"use client";
import {
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const features = [
  {
    icon: <Image
        src="/user.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "15,000+ Users",
    para: "Trusted by thousands through consistent quality and reliability."
  },
  {
     icon: <Image
        src="/trusted.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "Guaranteed Project Delivery",
    para: "Every project delivered on time with clearly defined milestones."
  },
  {
     icon: <Image
        src="/Analysis.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "Free Business Analysis",
    para: "Comprehensive requirement analysis provided at zero cost."
  },
  {
    icon: <Image
        src="/screen.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "Project Penalty Enforcement",
    para: "We commit to deadlines with strict delivery accountability."
  },
  {
    icon: <Image
        src="/Analysis.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "600+ Projects Delivered",
    para: "Proven expertise across hundreds of completed IT solutions."
  },
  {
    icon: <Image
        src="/suppport.svg"
        alt="Users Icon"
        width={96}
        height={96}
        priority
      />,
    title: "8+ Years of IT Exposure",
    para: "Solid industry experience ensuring efficiency and innovation."
  }
];


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          What Makes Coders Logics Services Different??
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Services is not just an idea — it's an initiative powered by technology to drive meaningful transformation.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className=" flex gap-4">
                <div className="text-[#98792a] text-4xl mb-4 ">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#98792a]">
                {item.title}

              </h3>
              <p className="mt-2 text-lg">
                {item.para}
              </p>
                </div>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
