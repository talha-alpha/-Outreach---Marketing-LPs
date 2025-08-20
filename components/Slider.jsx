"use client";
import Image from "next/image";

export default function Silders() {
  const logos = [
    "Logo 1.png",
    "Logo 2.png",
    "Logo 3.png",
    "Logo 4.png",
    "Logo 5.png",
    "Logo 6.png",
    "Logo 7.png",
    "Logo 8.png",
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-12 font-archivo overflow-hidden pb-custom">
      <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Left and Right fade overlays */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex animate-marquee">
          {[...logos, ...logos].map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center justify-center w-[180px] px-4 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={`/silderLogos/${name}`}
                alt={name.replace(".png", "")}
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
