"use client";
import Link from "next/link";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Image from "next/image";
export default function Footer() {
return (
<footer className="relative  text-white pt-16 pb-10 " >
     <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/coders-banner-2.jpg')" }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#211e59]/95 via-[#211e59]/90 to-black/80" />
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 relative z-10 md:grid-cols-4 gap-10">
<div>
   <Image
  src="/logofooter.png"
  alt="Footer Logo"
  width={200}
  height={80}
  className="w-[200px] bg-white h-auto"
/>
   
<p className="text-gray-300 leading-relaxed mt-2">We are a full-stack IT solutions company providing digital services including website development, mobile app development, SEO, branding, and cloud solutions.</p>


<div className="flex relative z-10 items-center gap-4 mt-6">
<Link href="#" target="_blank">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#98792a] hover:bg-white hover:text-[#211e59] transition"><FaFacebookF size={18} /></div>
</Link>


<Link href="#" target="_blank">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#211e59] hover:bg-[#98792a] hover:text-white transition"><FaLinkedinIn size={18} /></div>
</Link>
</div>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#98792a]">Quick Links</h2>
<ul className="space-y-3 text-gray-300">
<li><Link href="/" className="hover:text-[#98792a]">Home</Link></li>
<li><Link href="/about" className="hover:text-[#98792a]">About Us</Link></li>
<li><Link href="/services" className="hover:text-[#98792a]">Services</Link></li>

<li><Link href="/blog" className="hover:text-[#98792a]">Blog</Link></li>

<li><Link href="/contact" className="hover:text-[#98792a]">Contact</Link></li>
</ul>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#98792a]">Our Services</h2>
<div className="flex"> 
<div>
  <ul className="space-y-3 text-gray-300">
{/* <li className="hover:text-[#98792a] cursor-pointer"> <Link href="/digital-marketing" className="hover:text-[#98792a]">SEO </Link></li> */}
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/digital-marketing" className="hover:text-[#98792a]"> SEO Services </Link> </li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/website-development" className="hover:text-[#98792a]"> SMO  Services </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/app-development" className="hover:text-[#98792a]"> ORM Services </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/e-commerce" className="hover:text-[#98792a]">PPC Services </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/website-development" className="hover:text-[#98792a]">Website Development </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/website-development" className="hover:text-[#98792a]">UI-UX Development </Link></li>

<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/website-development" className="hover:text-[#98792a]">PHP Development </Link></li>

<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/website-development" className="hover:text-[#98792a]">Wordpress Development </Link></li>


</ul>
</div>
<div><ul className="space-y-3 text-gray-300">
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]"> AngularJs Development  </Link> </li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]"> NodeJs Development </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]"> Laravel Development </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]">E-Commerce Solutions </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/app-development" className="hover:text-[#98792a]">IPhone App Development </Link></li>
<li className="hover:text-[#98792a] cursor-pointer"> <Link href="/app-development" className="hover:text-[#98792a]">Android App Development </Link></li>

</ul> </div>
</div>
</div>


<div>
<h2 className="text-lg font-semibold mb-4 text-[#98792a]">Contact Us</h2>
<ul className="space-y-4 text-gray-300">
<li className="flex items-center gap-3"><FaPhoneAlt size={16} className="text-[#98792a]" />+91 98765 43210</li>
<li className="flex items-center gap-3"><MdEmail size={18} className="text-[#98792a]" />info@coderslogics.com</li>
<li className="flex items-start gap-3"><MdLocationOn size={20} className="text-[#98792a] mt-1" /><span> Texas, Austin, TX 78701, USA</span></li>
</ul>
</div>
</div>


<div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">© {new Date().getFullYear()} Coders Logics. All rights reserved.</div>
</footer>
);
}