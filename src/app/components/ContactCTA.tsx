// components/ContactCTA.tsx
// -------------------------
"use client";
import Link from "next/link";


export default function ContactCTA() {
return (
<section className="py-20 bg-gray-300 text-black text-center">
    
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Project?</h2>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">Contact our IT experts today and let's build innovative solutions together.</p>
<Link href="/contact" className="mt-6 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#211e59] to-[#98792a] text-white font-semibold shadow hover:bg-yellow-500 transition">Get a Free Consultation</Link>
</div>
</section>
);
}