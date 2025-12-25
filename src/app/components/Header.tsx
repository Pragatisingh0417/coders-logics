"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* Logo */}
        <Link href="/" onClick={closeAll}>
          <Image
            src="/logo.jpg"
            alt="Coders Logics"
            width={220}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-[#211e59]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-[#211e59]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>

          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1">Projects ▾</span>
            <div className="absolute top-6 left-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {projectLinks()}
            </div>
          </div>

          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/contact">
            <button className="bg-[#211e59] text-white px-5 py-2 rounded-full">
              Get a Quote
            </button>
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? "max-h-[1000px] border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 space-y-4 text-[17px] font-semibold text-[#211e59]">
          <Link href="/" onClick={closeAll}>Home</Link>
          <Link href="/about" onClick={closeAll}>About</Link>
          <Link href="/services" onClick={closeAll}>Services</Link>

          {/* MOBILE PROJECTS */}
          <button
            className="flex justify-between items-center"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            Projects
            <span>{projectsOpen ? "▲" : "▼"}</span>
          </button>

          {projectsOpen && (
            <div className="ml-4 flex flex-col gap-3 text-[16px] font-medium">
              {projectLinks(closeAll)}
            </div>
          )}

          <Link href="/blog" onClick={closeAll}>Blog</Link>
          <Link href="/contact" onClick={closeAll}>Contact</Link>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/contact" onClick={closeAll}>
              <button className="w-full bg-[#211e59] text-white py-3 rounded-full">
                Get a Quote
              </button>
            </Link>

            <Link href="/contact" onClick={closeAll}>
              <button className="w-full bg-[#fbbf24] text-[#211e59] py-3 rounded-full">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* PROJECT LINKS REUSE */
function projectLinks(onClick?: () => void) {
  const cls = "block px-4 py-2 hover:bg-gray-100 rounded";
  return (
    <>
      <Link href="/healthcare&homecare" onClick={onClick} className={cls}>Healthcare & Wellness</Link>
      <Link href="/homeservices" onClick={onClick} className={cls}>Home Services</Link>
      <Link href="/realestate" onClick={onClick} className={cls}>Real Estate</Link>
      <Link href="/e-commerce" onClick={onClick} className={cls}>E-commerce</Link>
      <Link href="/food" onClick={onClick} className={cls}>Food & Restaurant</Link>
      <Link href="/logistics" onClick={onClick} className={cls}>Logistics</Link>
      <Link href="/hotel-tour-and-travel-portfolio" onClick={onClick} className={cls}>Hotels & Travel</Link>
      <Link href="/Finence" onClick={onClick} className={cls}>Finance</Link>
    </>
  );
}
