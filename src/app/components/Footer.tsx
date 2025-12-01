"use client";
import Link from "next/link";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
export default function Footer() {
return (
<footer className="bg-[#211e59] text-white pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
<div>
<h2 className="text-xl font-semibold mb-4 text-[#fbbf24]">Coders Logics</h2>
<p className="text-gray-300 leading-relaxed">We are a full-stack IT solutions company providing digital services including website development, mobile app development, SEO, branding, and cloud solutions.</p>


<div className="flex items-center gap-4 mt-6">
<Link href="#" target="_blank">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fbbf24] hover:bg-white hover:text-[#211e59] transition"><FaFacebookF size={18} /></div>
</Link>


<Link href="#" target="_blank">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#211e59] hover:bg-[#fbbf24] hover:text-white transition"><FaLinkedinIn size={18} /></div>
</Link>
</div>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#fbbf24]">Quick Links</h2>
<ul className="space-y-3 text-gray-300">
<li><Link href="/" className="hover:text-[#fbbf24]">Home</Link></li>
<li><Link href="/about" className="hover:text-[#fbbf24]">About Us</Link></li>
<li><Link href="/services" className="hover:text-[#fbbf24]">Services</Link></li>
<li><Link href="/projects" className="hover:text-[#fbbf24]">Projects</Link></li>

<li><Link href="/blog" className="hover:text-[#fbbf24]">Blog</Link></li>

<li><Link href="/contact" className="hover:text-[#fbbf24]">Contact</Link></li>
</ul>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#fbbf24]">Our Services</h2>
<ul className="space-y-3 text-gray-300">
<li className="hover:text-[#fbbf24] cursor-pointer">SEO (Search Engine Optimization)</li>
<li className="hover:text-[#fbbf24] cursor-pointer">SMO (Social Media Optimization)</li>
<li className="hover:text-[#fbbf24] cursor-pointer">Website Development</li>
<li className="hover:text-[#fbbf24] cursor-pointer">App Development</li>
<li className="hover:text-[#fbbf24] cursor-pointer">E-Commerce Solutions</li>
<li className="hover:text-[#fbbf24] cursor-pointer">Branding & Digital Marketing</li>
</ul>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#fbbf24]">Contact Us</h2>
<ul className="space-y-4 text-gray-300">
<li className="flex items-center gap-3"><FaPhoneAlt size={16} className="text-[#fbbf24]" />+91 98765 43210</li>
<li className="flex items-center gap-3"><MdEmail size={18} className="text-[#fbbf24]" />info@coderslogics.in</li>
<li className="flex items-start gap-3"><MdLocationOn size={20} className="text-[#fbbf24] mt-1" /><span>Coders Logics, 2nd Floor, Technopark Plaza, New Delhi, India</span></li>
</ul>
</div>
</div>


<div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">© {new Date().getFullYear()} Coders Logics. All rights reserved.</div>
</footer>
);
}