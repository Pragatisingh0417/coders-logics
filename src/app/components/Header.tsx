"use client";
import { useState } from "react";
import Link from "next/link";


export default function Header() {
const [mobileMenu, setMobileMenu] = useState(false);


return (
<header className="w-full bg-white shadow-md sticky top-0 z-50">
<div className="flex w-full items-center justify-between px-4 md:px-12 py-4">
<div className="py-3">
<Link href="/">
<h4 className="text-2xl font-bold text-[#211e59]">
Coders <span className="text-[#98792a]">Logics</span>
</h4>
</Link>
</div>


<nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#211e59]">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/projects">Projects</Link>
<Link href="/blog">Blog</Link>

<Link href="/contact">Contact Us</Link>


<Link href="/contact">
<button className="bg-[#211e59] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#714898] transition">
Get a Quote
</button>
</Link>


<Link href="/contact">
<button className="bg-[#c69e37] text-[#ffffff] font-semibold px-6 py-2 rounded-full hover:bg-[#98792a] transition">
Get In Touch
</button>
</Link>
</nav>


<button className="md:hidden text-3xl text-[#211e59]" onClick={() => setMobileMenu(!mobileMenu)}>
☰
</button>
</div>


<div className={`md:hidden bg-white w-full shadow-md px-6 space-y-4 transition-all duration-300 overflow-hidden ${mobileMenu ? "max-h-[600px] py-6 opacity-100" : "max-h-0 opacity-0 py-0"}`}>
<Link href="/" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Home</Link>
<Link href="/about" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">About</Link>
<Link href="/services" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Services</Link>
<Link href="/projects" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Projects</Link>
<Link href="/projects" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Projects</Link>
<Link href="/blog" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Blog</Link>

<Link href="/contact" onClick={() => setMobileMenu(false)} className="block text-lg text-[#211e59]">Contact Us</Link>


<div className="w-full flex flex-col gap-4 pt-4">
<Link href="/contact" onClick={() => setMobileMenu(false)}>
<button className="w-full bg-[#211e59] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1a1847] transition">Get a Quote</button>
</Link>


<Link href="/contact" onClick={() => setMobileMenu(false)}>
<button className="w-full bg-[#fbbf24] text-[#211e59] font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">Get In Touch</button>
</Link>
</div>
</div>
</header>
);
}