// components/TopHeader.tsx
// -------------------------
"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


export default function TopHeader() {
return (
<div className="hidden md:block w-full bg-[#211e59] text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 text-sm">
<div className="flex flex-wrap items-center gap-6">
<div className="flex items-center gap-2">
{/* <FaPhoneAlt size={14} className="text-[#c69e37]" /> */}
{/* <span className="text-white">+91 98765 43210</span> */}
</div>


<div className="flex items-center gap-2">
<MdEmail size={20} className="text-[#c69e37]" />
<span className="text-white">info@coderslogics.com</span>
</div>
</div>


<div className="flex items-center gap-4">
<span className=" font-semibold">Contact us</span>


<div className="flex items-center gap-3">
<Link href="#" target="_blank">
<div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#c69e37] hover:bg-[#211e59] transition">
<FaFacebookF className="text-[#f5f5f6]" size={15} />
</div>
</Link>


<Link href="#" target="_blank">
<div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#c69e37] hover:bg-[#211e59] transition">
<FaLinkedinIn className="text-[#f4f4f4]" size={15} />
</div>
</Link>
</div>
</div>
</div>
</div>
);
}