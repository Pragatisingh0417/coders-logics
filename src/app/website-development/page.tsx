"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";
import { FaUserTie, FaSyncAlt, FaStar } from "react-icons/fa";


export default function WebsiteDevelopmentPage() {
  return (
    <div className="bg-gray-50 w-full">

      {/* HERO */}
      <section className="relative py-32 bg-[#0d0f2b] text-white overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#211e59]/60 via-[#3a2fa0]/50 to-yellow-600/40 mix-blend-overlay"></div>

        {/* Left floating glow */}
        <div className="absolute -top-10 -left-10 h-52 w-52 bg-yellow-400/20 rounded-full blur-3xl"></div>

        {/* Right floating glow */}
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-300/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
              Build Powerful & Stunning Websites
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We craft high-performing, visually appealing, conversion-driven websites using the latest technologies.
            </p>
            <a href="/contact" className="inline-block mt-8 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:opacity-90 transition shadow-lg">
              Start Your Project →
            </a>
          </motion.div>

          {/* Right Illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hidden md:flex justify-center">
            <Image src="/coders-image-1.jpg" alt="Website Development Illustration" width={450} height={450} className="drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center text-[#1b1b3a]">
          Why Choose Us?
        </h2>

        <p className="mt-6 text-gray-600 text-lg text-center leading-relaxed max-w-3xl mx-auto">
          We specialize in crafting tailored websites that blend innovative design with 
          cutting-edge technology. Our team ensures your website is modern, fast,
          user-friendly, and built for long-term growth.
        </p>

        {/* CARD GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* CARD 1 */}
          <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border border-transparent 
          hover:border-[#e8eefc] hover:-translate-y-1">

            <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">
              Expert Web Development Team
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our dedicated team of developers brings your website vision to life with 
              cutting-edge technology and beautiful design.
            </p>

            {/* ICON */}
            <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] 
              w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
              <FaLaptopCode size={22} />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border border-transparent 
          hover:border-[#e8eefc] hover:-translate-y-1">

            <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">
              Strategic Consulting
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We guide you through every step of your development journey using expert 
              industry insights and experience.
            </p>

            <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] 
              w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
              <FaUserTie size={22} />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border border-transparent 
          hover:border-[#e8eefc] hover:-translate-y-1">

            <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">
              Adaptable Solutions
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We deliver flexible, future-proof solutions that grow and evolve with 
              your business needs.
            </p>

            <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] 
              w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
              <FaSyncAlt size={22} />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white p-10 rounded-3xl relative shadow-[0_4px_35px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300 border border-transparent 
          hover:border-[#e8eefc] hover:-translate-y-1">

            <h3 className="text-2xl font-serif font-semibold text-[#1b1b3a]">
              Commitment to Quality
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We ensure top-tier performance, premium design, and seamless usability 
              for every project.
            </p>

            <div className="absolute right-8 top-8 bg-[#eaf0ff] text-[#1d4e89] 
              w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
              <FaStar size={22} />
            </div>
          </div>

        </div>
      </div>
    </section>


    

      {/* PROCESS SECTION */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f4f8]">Our 4-Step Development Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-14">
            {[
              { num: "01", title: "Planning", desc: "Understanding goals, audience & strategy." },
              { num: "02", title: "Design", desc: "Pixel-perfect UI/UX tailored for your brand." },
              { num: "03", title: "Development", desc: "High-quality coding with modern tech stack." },
              { num: "04", title: "Launch", desc: "Deployment + optimization + support!" },
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

      {/* DIFFERENCE SECTION */}
     <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#211e59] text-center">
      What makes us different from the rest?
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-8 mt-14 text-lg text-gray-700">

      {[
        "Customized Solutions",
        "User-Centric Approach",
        "Innovative Designs",
        "Agile Methodology"
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm
          hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {/* Icon */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500
          flex items-center justify-center shadow-md">
            <div className="h-3 w-3 bg-white rotate-45 rounded-[2px]"></div>
          </div>

          {/* Text */}
          <span className="font-medium text-gray-800">{item}</span>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* OUR SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-[#211e59]">Our Services</h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Elevate your business with cutting-edge web solutions built for performance and growth.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {[
              { title: "Custom Website Development", desc: "Modern websites with unique UI and smooth functionality tailored to your goals." },
              { title: "WordPress Development", desc: "Flexible and scalable WordPress sites that are easy to manage and optimized for performance." },
              { title: "E-commerce Development", desc: "Conversion-focused stores with seamless checkout experiences and robust features." },
              { title: "Responsive Web Design", desc: "Designs that adapt beautifully across all devices for enhanced UX." },
              { title: "Web Application Development", desc: "High-performance web apps made for speed, security, and scalability." },
            ].map((s, i) => (
              <div key={i} className="bg-[#0e0f16] p-8 rounded-2xl shadow-lg border border-gray-700 text-white">
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
                <a href="/contact" className="inline-block mt-6 text-sm font-semibold text-blue-300 hover:text-blue-400">Know more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />

    </div>
  );
}
