"use client";
import Link from "next/link";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 pb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/coders-banner-2.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#211e59]/95 via-[#211e59]/90 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        {/* LOGO + ABOUT */}
        <div className="md:col-span-3">
          <Image
            src="/logofooter.png"
            alt="Footer Logo"
            width={200}
            height={80}
            className="w-[200px] bg-white h-auto"
          />

          <p className="text-gray-300 leading-relaxed mt-4">
            We are a full-stack IT solutions company providing digital services including website development,
            mobile app development, SEO, branding, and cloud solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="#">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#98792a] hover:bg-white hover:text-[#211e59] transition">
                <FaFacebookF size={18} />
              </div>
            </Link>

            <Link href="#">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#211e59] hover:bg-[#98792a] hover:text-white transition">
                <FaLinkedinIn size={18} />
              </div>
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-[#98792a]">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-[#98792a]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#98792a]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#98792a]">Services</Link></li>
            <li><Link href="/blog" className="hover:text-[#98792a]">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#98792a]">Contact</Link></li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="md:col-span-5">
          <h2 className="text-lg font-semibold mb-4 text-[#98792a]">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/digital-marketing" className="hover:text-[#98792a]">SEO Services</Link></li>
              <li><Link href="/website-development" className="hover:text-[#98792a]">SMO Services</Link></li>
              <li><Link href="/app-development" className="hover:text-[#98792a]">ORM Services</Link></li>
              <li><Link href="/e-commerce" className="hover:text-[#98792a]">PPC Services</Link></li>
              <li><Link href="/website-development" className="hover:text-[#98792a]">Website Development</Link></li>
              <li><Link href="/website-development" className="hover:text-[#98792a]">UI-UX Development</Link></li>
              <li><Link href="/website-development" className="hover:text-[#98792a]">PHP Development</Link></li>
              <li><Link href="/website-development" className="hover:text-[#98792a]">Wordpress Development</Link></li>
            </ul>

            <ul className="space-y-3 text-gray-300">
              <li><Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]">AngularJs Development</Link></li>
              <li><Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]">NodeJs Development</Link></li>
              <li><Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]">Laravel Development</Link></li>
              <li><Link href="/frameworks-and-ecommerce-solutions" className="hover:text-[#98792a]">E-Commerce Solutions</Link></li>
              <li><Link href="/app-development" className="hover:text-[#98792a]">IPhone App Development</Link></li>
              <li><Link href="/app-development" className="hover:text-[#98792a]">Android App Development</Link></li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-[#98792a]">Contact Us</h2>
         <ul className="space-y-4 text-gray-300">
  <li className="flex items-center gap-3 whitespace-nowrap">
    <FaPhoneAlt className="text-[#98792a]" />
    <span>+91 98765 43210</span>
  </li>

  <li className="flex items-center gap-3 break-all">
    <MdEmail className="text-[#98792a]" />
    <span>info@coderslogics.com</span>
  </li>

  <li className="flex items-start gap-3">
    <MdLocationOn className="text-[#98792a] mt-1" />
    <span>
      Texas, Austin, TX 78701, USA
    </span>
  </li>
</ul>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} CODERS LOGICS. All rights reserved.
      </div>
    </footer>
  );
}
