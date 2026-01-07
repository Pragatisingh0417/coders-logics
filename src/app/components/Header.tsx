"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const navLinkClass = (path: string) =>
    `relative transition ${
      isActive(path)
        ? "font-bold after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-[#211e59] after:rounded-full"
        : "hover:text-[#98792a]"
    }`;

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

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-[#211e59]">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/about" className={navLinkClass("/about")}>About</Link>

          {/* SERVICES MEGA MENU */}
          <div className="relative group">
            <Link
              href="/services"
              className={`${navLinkClass("/services")} flex items-center gap-1`}
            >
              Services ▾
            </Link>

            <div className="absolute left-0 top-8 w-[520px] bg-white shadow-xl rounded-xl
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition
                            p-6 grid grid-cols-3 gap-6">
              {serviceLinks()}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer">
              Projects ▾
            </span>
            <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-md
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {projectLinks()}
            </div>
          </div>

          <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>

          <Link href="/contact">
            <button className="bg-[#211e59] text-white px-5 py-2 rounded-full hover:bg-[#98792a] transition">
              Get a Quote
            </button>
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? "max-h-[1200px] border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 space-y-4 font-semibold text-[#211e59]">

          <Link href="/" onClick={closeAll}>Home</Link>
          <Link href="/about" onClick={closeAll}>About</Link>

          {/* MOBILE SERVICES */}
          <button
            className="flex justify-between items-center"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <span>{servicesOpen ? "▲" : "▼"}</span>
          </button>

          {servicesOpen && (
            <div className="ml-4 flex flex-col gap-3 text-[16px]">
              {serviceLinks(closeAll, true)}
            </div>
          )}

          {/* MOBILE PROJECTS */}
          <button
            className="flex justify-between items-center"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            Projects <span>{projectsOpen ? "▲" : "▼"}</span>
          </button>

          {projectsOpen && (
            <div className="ml-4 flex flex-col gap-3 text-[16px]">
              {projectLinks(closeAll)}
            </div>
          )}

          <Link href="/blog" onClick={closeAll}>Blog</Link>
          <Link href="/contact" onClick={closeAll}>Contact</Link>

          {/* CTA */}
          <div className="pt-4">
            <Link href="/contact" onClick={closeAll}>
              <button className="w-full bg-[#211e59] text-white py-3 rounded-full">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* SERVICES */
function serviceLinks(onClick?: () => void, mobile = false) {
  const cls = mobile
    ? "flex items-center gap-3"
    : "flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50";

  return (
    <>
      <Link href="/services/app-development" onClick={onClick} className={cls}>
        <FaMobileAlt className="text-2xl text-[#211e59]" />
        <div>
          <p className="font-bold">App Development</p>
          {!mobile && <p className="text-sm text-gray-600">iOS & Android apps</p>}
        </div>
      </Link>

      <Link href="/services/web-development" onClick={onClick} className={cls}>
        <FaLaptopCode className="text-2xl text-[#211e59]" />
        <div>
          <p className="font-bold">Web Development</p>
          {!mobile && <p className="text-sm text-gray-600">Modern & scalable web</p>}
        </div>
      </Link>

      <Link href="/services/digital-marketing" onClick={onClick} className={cls}>
        <FaBullhorn className="text-2xl text-[#211e59]" />
        <div>
          <p className="font-bold">Digital Marketing</p>
          {!mobile && <p className="text-sm text-gray-600">SEO, Ads & Growth</p>}
        </div>
      </Link>
    </>
  );
}

/* PROJECTS */
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
      <Link href="/finance" onClick={onClick} className={cls}>Finance</Link>
    </>
  );
}
