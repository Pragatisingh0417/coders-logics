"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Why Modern Businesses Need Powerful Websites",
    slug: "why-modern-businesses-need-powerful-websites",
    description:
      "A well-designed website builds credibility, improves user engagement, and boosts conversions.",
    img: "/coders-banner-1.jpg",
  },
  {
    id: 2,
    title: "Top 5 UI/UX Trends for 2025",
    slug: "top-ui-ux-trends-2025",
    description:
      "From glassmorphism to 3D animations — trends that will redefine the digital experience.",
    img: "/coders-banner-2.jpg",
  },
  {
    id: 3,
    title: "How SEO Helps Your Business Grow",
    slug: "how-seo-helps-your-business-grow",
    description:
      "SEO is the backbone of organic growth. Learn key strategies to rank higher and attract customers.",
    img: "/contact-banner.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#f7f7f7] pb-24">

      {/* HERO */}
      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center
          min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh]
          bg-cover bg-center bg-no-repeat
          text-white overflow-hidden"
        style={{
          backgroundImage: "url('/app-banner.jpg')",
        }}
      >
        {/* DARK OVERLAY (for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r
          from-[#0d0f2b]/90 via-[#211e59]/75 to-[#98792a]/70"></div>

        {/* Decorative glows */}
        <div className="absolute -top-10 -left-10 h-52 w-52 bg-[#98792a]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-400/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              CODERS LOGICS BLOGS  
                          </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
              We create intuitive, high-performance mobile and web applications tailored to your business needs.


            </p>

            <div className="mt-8 flex flex-row gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center
                  px-8 py-4 rounded-full text-lg font-semibold
                  bg-gradient-to-r from-[#98792a] to-[#facc15]
                  text-[#0d0f2b] shadow-lg hover:opacity-90 transition"
              >
                Start Your Project →
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center
                  px-8 py-4 rounded-full text-lg font-semibold
                  border border-white/40 hover:bg-white/10 transition"
              >
                Know More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
{/* ---------- Blog Topics ---------- */}
<section className="max-w-7xl mx-auto px-6 mt-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
    What You’ll Learn From Our Blogs
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Web Development",
        desc: "Best practices, performance optimization, and scalable website solutions."
      },
      {
        title: "UI / UX Design",
        desc: "Design trends, user behavior insights, and experience-driven interfaces."
      },
      {
        title: "SEO & Marketing",
        desc: "Organic growth strategies, on-page SEO, and digital visibility tips."
      },
      {
        title: "Mobile Applications",
        desc: "Android, iOS, and cross-platform app development insights."
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* ---------- Blog Grid ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-7xl mx-auto mt-10">
        {blogs.map((blog) => (
          <motion.a
            key={blog.id}
            href={`#`}
            className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Blog Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Blog Text */}
            <div className="p-6">
              
              <h3 className="text-xl font-semibold group-hover:text-blue-700 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">
                {blog.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
      {/* ---------- Blog Info Content ---------- */}
<section className="max-w-7xl mx-auto px-6 mt-20">
  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      Insights, Trends & Digital Knowledge
    </h2>

    <p className="text-gray-600 leading-relaxed text-lg">
      At <strong>Coders Logics</strong>, our blog section is designed to share practical knowledge,
      industry insights, and emerging trends in web development, mobile applications,
      UI/UX design, and digital marketing.  
      We believe that informed businesses make better decisions, and our content
      focuses on helping brands grow in the digital ecosystem.
    </p>

    <p className="text-gray-600 leading-relaxed text-lg mt-5">
      From understanding how modern websites improve conversions to exploring the
      latest UI/UX design patterns and SEO strategies, our blog content reflects
      real-world experience gained from working with startups, enterprises,
      and growing businesses across different industries.
    </p>

    <p className="text-gray-600 leading-relaxed text-lg mt-5">
      Even when new articles are not published frequently, this section serves
      as a knowledge hub that highlights our expertise, approach, and commitment
      to delivering high-quality digital solutions.
    </p>
  </div>
</section>

    </section>
  );
}
