"use client";
import Link from "next/link";
import Image from "next/image";


export default function Banner() {
return (
<section className="relative w-full h-[600px] sm:h-[700px] overflow-hidden">
<Image src="/coders-banner-1.jpg" alt="IT Banner" fill priority className="object-cover object-center" />
<div className="absolute inset-0" style={{ backgroundColor: "#211e59cc" }}></div>


<div className="relative max-w-7xl h-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-16 md:pt-0">
<div className="text-left text-white max-w-xl md:max-w-2xl">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">Transforming Businesses<br/>With Smart IT Solutions</h1>


<svg viewBox="0 0 200 20" className="mt-4 w-44 h-6 sm:w-56 sm:h-8" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12 C40 -6 160 24 200 4" stroke="#98792a" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.95" />
</svg>


<p className="mt-6 text-lg text-gray-100">Innovative software development, cloud solutions, and IT consulting to help companies grow digitally.</p>
</div>


<div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm bg-white/95">
<h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Let's Build Something Great</h2>
<p className="mt-4 text-sm sm:text-base text-gray-600 text-center">Get a free consultation with our IT experts and explore how we can transform your business through technology.</p>


<div className="mt-6 flex flex-col gap-4">
<Link href="/contact" className="w-full"><button className="w-full px-6 py-3 rounded-full text-white  font-semibold shadow-lg transition" style={{ backgroundColor: "#c69e37" }}>Get Free Consultation</button></Link>
<Link href="/services" className="w-full"><button className="w-full px-6 py-3 rounded-full text-white font-semibold shadow-lg transition" style={{ backgroundColor: "#211e59" }}>Explore Our Services</button></Link>
</div>


<p className="mt-4 text-xs text-gray-400 text-center">Trusted by startups & enterprises worldwide.</p>
</div>
</div>
</section>
);
}

