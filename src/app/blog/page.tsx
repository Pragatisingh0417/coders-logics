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
    img: "/blog-1.jpg",
  },
  {
    id: 2,
    title: "Top 5 UI/UX Trends for 2025",
    slug: "top-ui-ux-trends-2025",
    description:
      "From glassmorphism to 3D animations — trends that will redefine the digital experience.",
    img: "/blog-2.jpg",
  },
  {
    id: 3,
    title: "How SEO Helps Your Business Grow",
    slug: "how-seo-helps-your-business-grow",
    description:
      "SEO is the backbone of organic growth. Learn key strategies to rank higher and attract customers.",
    img: "/blog-3.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#f7f7f7] pb-24">

      {/* ---------- Blog Hero Banner ---------- */}
      <div className="relative w-full h-[260px] md:h-[360px] mb-16">
        <Image
          src="/networkabout.jpg"
          alt="Blog Banner"
          fill
          className="object-cover brightness-[0.55]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl"
          >
            Coders Logics Blog
          </motion.h1>
        </div>
      </div>

      {/* ---------- Blog Grid ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <motion.a
            key={blog.id}
            href={`/blog/${blog.slug}`}
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
    </section>
  );
}
