"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaSyncAlt, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";

export default function AppDevelopmentPage() {
  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      <section className="relative py-32 bg-[#0d0f2b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#211e59]/60 via-[#3a2fa0]/50 to-yellow-600/40 mix-blend-overlay"></div>
        <div className="absolute -top-10 -left-10 h-52 w-52 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-300/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
              Build Powerful Apps That Drive Growth
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We create intuitive, high-performance mobile and web applications tailored to your business needs.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:opacity-90 transition shadow-lg"
            >
              Start Your App →
            </a>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hidden md:flex justify-center">
            <Image src="/app-development-hero.png" alt="App Development" width={450} height={450} className="drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center text-[#1b1b3a]">
            Why Choose Our App Development Team?
          </h2>

          <p className="mt-6 text-gray-600 text-lg text-center leading-relaxed max-w-3xl mx-auto">
            Our developers combine design, technology, and strategy to build apps that engage users, 
            streamline operations, and scale with your business.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            {/* CARD 1 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Custom Mobile Apps</h3>
              <p className="text-gray-600 mt-4">We design apps for iOS and Android that match your brand and business goals.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaMobileAlt size={22} />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Web App Development</h3>
              <p className="text-gray-600 mt-4">Build scalable web applications with modern frameworks and technologies.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaLaptopCode size={22} />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">UI/UX Design</h3>
              <p className="text-gray-600 mt-4">Intuitive and engaging interfaces for seamless user experiences.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaRocket size={22} />
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Maintenance & Support</h3>
              <p className="text-gray-600 mt-4">Continuous support to keep your apps updated, secure, and optimized.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaSyncAlt size={22} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f4f8]">Our App Development Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-14">
            {[
              { num: "01", title: "Planning", desc: "Understand requirements and define project scope." },
              { num: "02", title: "Design", desc: "Create wireframes, prototypes, and UI/UX designs." },
              { num: "03", title: "Development", desc: "Build mobile and web apps with best practices." },
              { num: "04", title: "Deployment & Support", desc: "Launch, monitor, and maintain your apps." },
            ].map((step, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white rounded-2xl shadow border">
                <div className="text-5xl font-bold text-yellow-600 opacity-80">{step.num}</div>
                <h4 className="mt-4 text-xl font-semibold text-[#211e59]">{step.title}</h4>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#211e59] text-center">Why Partner With Us?</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14 text-lg text-gray-700">
            {[
              "Custom apps tailored to your business needs",
              "Focus on performance, scalability, and security",
              "Expert team with full-stack and mobile expertise",
              "Ongoing support and optimization after launch",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all bg-white">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <div className="h-3 w-3 bg-white rotate-45 rounded-[2px]"></div>
                </div>
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-[#211e59]">Our App Development Services</h2>

          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            End-to-end app development services from idea to deployment and maintenance.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {[
              { title: "iOS App Development", desc: "Create high-performance apps for iPhone and iPad." },
              { title: "Android App Development", desc: "Build feature-rich apps optimized for Android devices." },
              { title: "Cross-Platform Apps", desc: "Write once, run anywhere with React Native, Flutter, or Xamarin." },
              { title: "Web App Development", desc: "Responsive web applications that scale seamlessly." },
              { title: "UI/UX Design", desc: "Design intuitive interfaces that enhance user engagement." },
            ].map((s, i) => (
              <div key={i} className="bg-[#0e0f16] p-8 rounded-2xl shadow-lg border border-gray-700 text-white">
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
                <a href="/contact" className="inline-block mt-6 text-sm font-semibold text-blue-300 hover:text-blue-400">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
