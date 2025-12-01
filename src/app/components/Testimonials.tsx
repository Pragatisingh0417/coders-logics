"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Leena Joe",
    role: "Founder",
    img: "/testimonial-1.jpg",
    review: "Amazing support & top-class development team!",
    stars: 5,
  },
  {
    name: "Sophia Verma",
    role: "Store Owner",
    img: "/testimonial-2.jpg",
    review: "The UI/UX improvements boosted conversions instantly.",
    stars: 5,
  },
  {
    name: "Rohit Mehta",
    role: "App Creator",
    img: "/testimonial-3.jpg",
    review: "They delivered our app before deadline. Highly recommended!",
    stars: 5,
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#211e59]">
          What Clients Say
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          We take pride in delivering exceptional results.  
          Here's what our clients say about their experience with us.
        </p>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="overflow-hidden mt-16 relative group">
        <div className="flex animate-marquee group-hover:animate-marquee-pause space-x-12">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[350px] bg-white p-8 rounded-3xl border border-gray-100 shadow-xl
              hover:shadow-[0_0_30px_rgba(33,30,89,0.3)]
              transition-all duration-300 transform hover:-rotate-1 hover:scale-[1.04]"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 40%, #f6f0ff 100%)",
              }}
            >
              {/* TOP SECTION */}
              <div className="flex items-center gap-3">
                <Image
                  src={t.img}
                  width={60}
                  height={60}
                  alt={t.name}
                  className="rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="font-semibold text-[#211e59]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>

                  {/* ⭐ STAR RATINGS */}
                  <div className="flex mt-1 text-yellow-500">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="mt-4 text-gray-600 leading-relaxed italic">
                “{t.review}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .group-hover\\:animate-marquee-pause:hover {
          animation-play-state: paused !important;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
