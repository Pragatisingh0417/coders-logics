"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    `px-4 py-1 rounded-full transition ${
      isActive(path)
        ? "bg-[#211e59] text-white font-bold"
        : "hover:text-[#98792a]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* LOGO */}
        <Link href="/" onClick={closeAll}>
          <Image src="/logo.jpg" alt="Coders Logics" width={220} height={70} />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-[#211e59]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-[#211e59]">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/about" className={navLinkClass("/about")}>About</Link>

          {/* ================= SERVICES DROPDOWN ================= */}
          <div className="relative group">
            <Link
              href="/services"
              className={`${navLinkClass("/services")} flex items-center gap-1`}
            >
              Services ▾
            </Link>

            <div
              className="absolute left-0 top-full w-[560px]
                         bg-white shadow-xl rounded-xl p-6
                         opacity-0 invisible
                         group-hover:opacity-100 group-hover:visible
                         hover:opacity-100 hover:visible
                         transition-all duration-200"
            >
              <div className="grid grid-cols-3 gap-6">
                {serviceLinks()}
              </div>
            </div>
          </div>

          {/* ================= PROJECTS DROPDOWN ================= */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center gap-1">
              Projects ▾
            </span>

            <div
              className="absolute left-0 top-full w-64
                         bg-white shadow-lg rounded-md
                         opacity-0 invisible
                         group-hover:opacity-100 group-hover:visible
                         hover:opacity-100 hover:visible
                         transition-all duration-200"
            >
              {projectLinks()}
            </div>
          </div>

          <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>

          <Link href="/contact">
            <button className="bg-[#211e59] text-white px-6 py-2 rounded-full hover:bg-[#98792a]">
              Get a Quote
            </button>
          </Link>
        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${
          menuOpen ? "max-h-[1300px] border-t" : "max-h-0"
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
            <div className="ml-4 flex flex-col gap-3">
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
            <div className="ml-4 flex flex-col gap-3">
              {projectLinks(closeAll)}
            </div>
          )}

          <Link href="/blog" onClick={closeAll}>Blog</Link>
          <Link href="/contact" onClick={closeAll}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

/* ================= SERVICES LINKS ================= */
function serviceLinks(onClick?: () => void, mobile = false) {
  const cls = mobile
    ? "flex items-center gap-3"
    : "flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50";

  return (
    <>
      <Link href="/app-development" onClick={onClick} className={cls}>
        <div>
          <p className="font-bold">App Development</p>
          {!mobile && <p className="text-sm text-gray-600">iOS & Android</p>}
        </div>
      </Link>

      <Link href="/website-development" onClick={onClick} className={cls}>
        <div>
          <p className="font-bold">Web Development</p>
          {!mobile && <p className="text-sm text-gray-600">Modern websites</p>}
        </div>
      </Link>

      <Link href="/digital-marketing" onClick={onClick} className={cls}>
        <div>
          <p className="font-bold">Digital Marketing</p>
          {!mobile && <p className="text-sm text-gray-600">SEO & Growth</p>}
        </div>
      </Link>
    </>
  );
}

/* ================= PROJECT LINKS ================= */
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
