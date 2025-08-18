"use client"
import Image from "next/image"

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
  ]

  return (
    <section className="flex w-full bg-neutral-950 text-white">
      <div className="relative w-full select-none py-8">
        <div className="marquee flex w-max items-center">
          {[...logos, ...logos].map((name, idx) => (
            <div key={`${name}-${idx}`} className="shrink-0 mx-3 md:mx-4 opacity-80 hover:opacity-100 transition-opacity">
              <Image src={`/silderLogos/${name}`} alt={name.replace(".png", "")} width={140} height={40} className="h-10 w-auto object-contain" draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee { animation: marquee 10s linear infinite; will-change: transform; }
      `}</style>
    </section>
  )
}
  