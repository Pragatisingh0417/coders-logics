"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaGlobe, FaBullhorn, FaMobileAlt, FaLayerGroup } from "react-icons/fa";


export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
    const [packagesOpen, setPackagesOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
    setPackagesOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const navLinkClass = (path: string) =>
    `px-4 py-1 rounded-full transition ${isActive(path)
      ? "bg-[#211e59] text-white font-bold"
      : "hover:text-[#98792a]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* LOGO */}
        <Link href="/" onClick={closeAll}>
          <Image src="/logo.jpg" alt="CODERS LOGICS" width={220} height={70} />
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
              className="absolute left-1/2 top-full -translate-x-1/2
             w-[1100px]
             bg-white shadow-xl rounded-xl p-6
             opacity-0 invisible
             group-hover:opacity-100 group-hover:visible
             hover:opacity-100 hover:visible
             transition-all duration-200"
            >

              <div className="grid grid-cols-4 gap-6">
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

           {/* ================= PROJECTS DROPDOWN ================= */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center gap-1">
              Packages ▾
            </span>

            <div
              className="absolute left-0 top-full w-64
                         bg-white shadow-lg rounded-md
                         opacity-0 invisible
                         group-hover:opacity-100 group-hover:visible
                         hover:opacity-100 hover:visible
                         transition-all duration-200"
            >
              {PackageLinks()}
            </div>
          </div>

          <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>
          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>

          <button
  onClick={() => setOpen(true)}
  className="bg-[#211e59] text-white px-6 py-2 rounded-full hover:bg-[#98792a]"
>
  Get a Quote
</button>

        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white ${menuOpen ? "max-h-[1300px] border-t" : "max-h-0"
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

          {/* MOBILE Pckages */}
          <button
            className="flex justify-between items-center"
            onClick={() => setPackagesOpen(!packagesOpen)}
          >
            Packages <span>{packagesOpen ? "▲" : "▼"}</span>
          </button>

          {packagesOpen && (
            <div className="ml-4 flex flex-col gap-3">
              {PackageLinks(closeAll)}
            </div>
          )}

          <Link href="/blog" onClick={closeAll}>Blog</Link>
          <Link href="/contact" onClick={closeAll}>Contact</Link>
        </div>
      </div>
      {/* ================= GET QUOTE MODAL ================= */}
{open && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center">

    {/* Overlay */}
    <div
      onClick={() => setOpen(false)}
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
    />

    {/* Modal */}
    <div className="relative bg-white w-full max-w-md mx-4 rounded-2xl p-8 shadow-xl z-10">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
      >
        ✕
      </button>

      <h3 className="text-2xl font-bold text-[#211e59]">
        Get a Free Quote
      </h3>

      <p className="mt-2 text-gray-600 text-sm">
        Share your requirements and our team will contact you shortly.
      </p>

      {/* FORM */}
      <form className="mt-6 space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#98792a]"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#98792a]"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-3 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#98792a]"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#98792a] to-[#facc15]
          text-[#0d0f2b] py-3 rounded-full font-semibold
          hover:opacity-90 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
)}

    </header>
  );
}

/* ================= SERVICES LINKS ================= */
function serviceLinks(onClick?: () => void, mobile = false) {
  const cls = mobile
    ? "flex items-center gap-3"
    : "flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50";

  const iconCls =
    "text-[#98792a] text-2xl mt-1 shrink-0";

  return (
    <>
      {/* WEBSITE DEVELOPMENT */}
      <Link href="/website-development" onClick={onClick} className={cls}>
        <FaGlobe className={iconCls} />
        <div>
          <p className="font-bold">Website Development</p>
          {!mobile && <p className="text-sm text-gray-600 mt-2">UI-UX Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">WordPress Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">PHP Website Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">CodeIgniter Development</p>}
        </div>
      </Link>

      {/* DIGITAL MARKETING */}
      <Link href="/digital-marketing" onClick={onClick} className={cls}>
        <FaBullhorn className={iconCls} />
        <div>
          <p className="font-bold mb-2">Digital Marketing</p>
          {!mobile && <p className="text-sm text-gray-600">SEO Services</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">SMO Services</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">PPC Services</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">ORM Services</p>}
        </div>
      </Link>
      {/* Frame work */}
      <Link href="/frameworks-and-ecommerce-solutions" onClick={onClick} className={cls}>
        <FaLayerGroup className={iconCls} />
        <div>
          <p className="font-bold mb-2">Framework & Ecommerce</p>
          {!mobile && <p className="text-sm text-gray-600">AngularJs Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">Node Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">Laravel Development</p>}

          {!mobile && <p className="text-sm text-gray-600 mt-2">Ecommerce Development</p>}

        </div>
      </Link>
      {/* APP DEVELOPMENT */}
      <Link href="/app-development" onClick={onClick} className={cls}>
        <FaMobileAlt className={iconCls} />
        <div>
          <p className="font-bold mb-2">App Development</p>
          {!mobile && <p className="text-sm text-gray-600">Android App Development</p>}
          {!mobile && <p className="text-sm text-gray-600 mt-2">iOS Development</p>}
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

function PackageLinks(onClick?: () => void) {
  const cls = "block px-4 py-2 hover:bg-gray-100 rounded";

  return (
    <>
      <Link href="/SEOPackagesPage" onClick={onClick} className={cls}>SEO Packages</Link>
      <Link href="/SMOPackagesPage" onClick={onClick} className={cls}>SMO Packages</Link>
      <Link href="/WebsitePackagesPage" onClick={onClick} className={cls}>Website Packages</Link>
      <Link href="/MobileAppPackagesPage" onClick={onClick} className={cls}>Mobile App Packages</Link>
      
    </>
  );
}
