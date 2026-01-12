"use client";

export default function TrustedBy() {
  return (
    <div className="w-full overflow-hidden mt-10 mb-14">
      <div className="flex animate-marquee items-center gap-6 sm:gap-10">

        {[
          "/logo.jpg",
          "/react-logo.png",
          "/nextjs-logo.png",
          "/nodejs-logo.png",
          "/aws-logo.png",
          "/secure-development-badge.png",
          "/support-badge.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="
              flex items-center justify-center
              w-[110px] h-[55px]
              sm:w-[140px] sm:h-[70px]
              lg:w-[170px] lg:h-[80px]
              flex-shrink-0
            "
          >
            <img
              src={src}
              alt="CodersLogics technology and trust badge"
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}

      </div>
    </div>
  );
}
