"use client";
import { FaBullhorn, FaChartLine, FaUsers, FaRocket, FaSyncAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";

export default function DigitalMarketingPage() {
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
              Elevate Your Brand With Expert Digital Marketing
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We create innovative marketing strategies that drive traffic, generate leads, 
              and convert visitors into loyal customers.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:opacity-90 transition shadow-lg"
            >
              Get Started →
            </a>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hidden md:flex justify-center">
            <Image src="/digital-marketing-hero.png" alt="Digital Marketing" width={450} height={450} className="drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center text-[#1b1b3a]">
            Why Work With Our Digital Marketing Experts?
          </h2>

          <p className="mt-6 text-gray-600 text-lg text-center leading-relaxed max-w-3xl mx-auto">
            Our team blends creativity and analytics to deliver campaigns that actually convert. 
            We focus on measurable results and scalable growth for your business.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            {/* CARD 1 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">SEO & Organic Growth</h3>
              <p className="text-gray-600 mt-4">Boost your search rankings and attract quality organic traffic.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaChartLine size={22} />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Targeted Ads & Campaigns</h3>
              <p className="text-gray-600 mt-4">Reach your ideal audience with precision targeting across platforms.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaUsers size={22} />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Analytics & Optimization</h3>
              <p className="text-gray-600 mt-4">Track, analyze, and refine campaigns for maximum ROI.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaSyncAlt size={22} />
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border hover:border-[#e8eefc] hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">Creative Strategy</h3>
              <p className="text-gray-600 mt-4">Innovative campaigns that strengthen your brand identity.</p>
              <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] w-12 h-12 rounded-xl flex items-center justify-center">
                <FaStar size={22} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f4f8]">Our Digital Marketing Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-14">
            {[
              { num: "01", title: "Research", desc: "Understand your audience and market trends." },
              { num: "02", title: "Strategy", desc: "Craft tailored marketing plans for maximum impact." },
              { num: "03", title: "Execution", desc: "Launch campaigns across multiple channels." },
              { num: "04", title: "Optimization", desc: "Refine campaigns for better results and ROI." },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#211e59] text-center">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14 text-lg text-gray-700">
            {[
              "Custom digital strategies for your business",
              "Data-driven campaigns with measurable results",
              "Expert team with diverse marketing skills",
              "Transparent reporting and analytics dashboards",
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
          <h2 className="text-3xl md:text-4xl text-center font-bold text-[#211e59]">Our Services</h2>

          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            We provide end-to-end digital marketing services to elevate your brand and drive growth.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {[
              { title: "Search Engine Optimization (SEO)", desc: "Improve visibility and drive organic traffic to your site." },
              { title: "Social Media Marketing", desc: "Engage your audience across platforms and build brand loyalty." },
              { title: "Pay-Per-Click Advertising (PPC)", desc: "Targeted ads that deliver measurable ROI." },
              { title: "Content Marketing", desc: "Create content that informs, engages, and converts." },
              { title: "Email Marketing", desc: "Nurture leads and retain customers with personalized campaigns." },
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
