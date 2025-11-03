"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhyAirportsChoose() {
  const cards = [
    {
      title: "Future-Proof Architecture",
      desc: "Built with domain-driven design and clean architecture. No monoliths. No spaghetti code. Always ready to scale with your airport.",
      bg: "/Future-Proof-Arc.svg",
      width: "max-w-[300px] min-w-[250px]",
      height: "495px",
    },
    {
      title: "All-In-One Software",
      desc: "Operations, billing, gates, tenants, and utilities, all brought together in one software. No more vendor juggling.",
      bg: "/All-In-One-Software.png",
      width: "max-w-[300px] min-w-[250px]",
      height: "495px",
    },
    {
      title: "Built for Growth",
      desc: "Scales as airports expand without costly replacements or patchwork fixes.",
      bg: "/Built-for-Growth.png",
      width: "max-w-[300px] min-w-[250px]",
      height: "495px",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 1200); 
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section
      className="relative py-12 flex justify-center mb-20 w-[90%] pb-5"
      style={{
        background: `url('/WhyAirportChoose.png') center/cover no-repeat`,
        borderRadius: "32px",
      }}
    >
      <div className="w-[100%] max-w-7xl sm:mx-auto flex flex-col items-center mx-2">
        <h2 className="text-white font-bold text-2xl md:text-4xl text-center mt-2 mb-3">
          Why Airports Choose AcuSky Over Legacy Vendors
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-10 text-center max-w-2xl">
          AcuSky replaces outdated, siloed systems with an all-in-one software
          that scales as your airport grows
        </p>
        <div className="relative w-full flex justify-center">
          <object
            type="image/svg+xml"
            data="/AcuSky_Sec4_Animatio.svg"
            className="w-[95%]  md:w-[90%] lg:w-[100%] h-auto"
            aria-label="AcuSky Section 4 Animation"
          />
        </div>
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-5 xl:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === activeIndex ? 1.08 : 1,
                opacity: i === activeIndex ? 1 : 0.9,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className={`rounded-[18px] shadow-md flex flex-col items-center justify-end p-6 text-center transition-transform ${card.width}`}
              style={{
                backgroundImage: `url('${card.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: card.height,
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="font-bold text-lg mb-2 text-[#17012C]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#504E4E]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative xl:mx-auto mt-12 sm:mt-16 md:mt-20 text-center bg-[#D7EAFF99] rounded-[12px] mx-2 px-10">
          <Image
            src="/PlaneLineLeft.svg"
            alt="Plane Left"
            width={220}
            height={80}
            className="absolute md:left-0 md:top-1/3 xl:top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] md:w-[240px] z-10"
          />
          <Image
            src="/PlaneLineRight.svg"
            alt="Plane Right"
            width={220}
            height={80}
            className="absolute right-0 md:-right-5 lg:right-0 top-12 sm:top-2 md:-top-2 lg:-top-5 w-[160px] sm:w-[200px] md:w-[240px] z-15"
          />

          <div className="relative backdrop-blur-md px-4 sm:px-8 md:px-1 py-5 sm:py-2">
            <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Airports choose AcuSky because it offers one software that
              simplifies operations, reduces costs, and grows as they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
