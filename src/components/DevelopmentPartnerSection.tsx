"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
const LIFT_PX = 18;
const CYCLE_MS = 1600;
const cardData = [
  {
    id: 1,
    title: "Tailored Modules",
    desc: "Features designed around your needs.",
    bg: "/cardBottomBg1.png",
    icon: "/icon_tailored.svg",
  },
  {
    id: 2,
    title: "API Integrations",
    desc: "Connect AcuSky with existing systems.",
    bg: "/cardBottomBg2.png",
    icon: "/icon_api.svg",
  },
  {
    id: 3,
    title: "Advanced Analytics",
    desc: "Custom dashboards and reports.",
    bg: "/cardBottomBg3.png",
    icon: "/icon_advanced.svg",
  },
  {
    id: 4,
    title: "Future Scaling",
    desc: "Add new modules without disruption.",
    bg: "/cardBottomBg4.png",
    icon: "/icon_future.svg",
  },
];
type Card = {
  id: number;
  title: string;
  desc: string;
  bg: string;
  icon?: string;
};

const CardItem: React.FC<{
  c: Card;
  index: number;
  isActive?: boolean;
  className?: string;
  height?: number;
}> = ({ c, isActive = false, className = "", height = 170 }) => (
  <motion.article
    key={c.id}
    className={
      `
      relative overflow-hidden
      rounded-t-[28px] rounded-b-none
      ` + className
    }
    animate={isActive ? { y: [0, -LIFT_PX, 0] } : { y: 0 }}
    transition={
      isActive
        ? { duration: CYCLE_MS / 1000, ease: "easeInOut" }
        : { duration: 0.35 }
    }
  >
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${c.bg})`, height }}
    />

    {isActive && (
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
    )}

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-row items-center gap-3 text-white">
        {c.icon ? (
          <Image
            src={c.icon}
            alt=""
            width={32}
            height={32}
            className="shrink-0 opacity-95"
          />
        ) : null}
        <div className="min-w-0">
          <h4
            className={
              "font-semibold text-base sm:text-lg leading-tight " +
              (isActive ? "drop-shadow-[0_2px_3px_rgba(0,0,0,0.65)]" : "")
            }
          >
            {c.title}
          </h4>
          <p
            className={
              "text-xs sm:text-sm mt-1 " +
              (isActive
                ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                : "text-white/90")
            }
          >
            {c.desc}
          </p>
        </div>
      </div>
    </div>
  </motion.article>
);

export default function DevelopmentPartner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % cardData.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="
     
         relative w-full overflow-hidden
    px-[clamp(16px,4vw,64px)]   
    pt-16 md:pb-0              
      "
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-14 w-full mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight">
            More Than Software.
            <br />
            A Development Partner <br className="hidden md:block" /> for
            Airports
          </h2>

          <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            Every airport operates differently. Beyond our all-in-one software,
            AcuSky builds custom solutions to match your airport&apos;s unique
            challenges without relying on third-party vendors.
          </p>
        </div>

        <div className="relative flex-1 flex justify-center md:justify-end">
          <div
            className="
      relative 
      w-full max-w-[600px] 
      md:max-w-[680px] lg:max-w-[740px]
      rounded-[40px]
      overflow-visible
    
    "
          >
            <Image
              src="/DevelopmentPartner.png"
              alt="Development Partner Illustration"
              width={740}
              height={500}
              className="
        w-full h-auto object-contain
        rounded-[40px]
      "
              priority
            />

            <div
              className="
        absolute -bottom-2 right-0 sm:right-0 md:right-0 xl:-right-8 xl:-bottom-16
        w-16 sm:w-20 md:w-18 lg:w-24 xl:w-48
        aspect-square
     
       
        flex items-center justify-center
      "
            >
              <Image
                src="/AcuCkyCircleLogo.png"
                alt="AcuSky Circle Logo"
                width={140}
                height={140}
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 sm:mt-16 md:mt-20  text-center bg-[#AFCDFF63] rounded-[12px] ">
        {/* Plane SVGs */}
        <Image
          src="/PlaneLineLeft.svg"
          alt="Plane Left"
          width={220}
          height={80}
          className=" absolute md:left-0 md:top-1/3 xl:top-1/2  -translate-y-1/2 w-[160px] sm:w-[200px] md:w-[240px] z-10"
        />
        <Image
          src="/PlaneLineRight.svg"
          alt="Plane Right"
          width={220}
          height={80}
          className=" absolute  -right-5 lg:right-0
        top-30     min-[375px]:top-15            
        sm:top-10            md:15 lg:-top-1  w-[160px] sm:w-[200px] md:w-[240px] z-10"
        />

        <div className="relative  backdrop-blur-md  shadow-md rounded-[12px] px-4 sm:px-8 md:px-1 py-5 sm:py-2">
          <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you need a unique module, a specialized workflow, or
            advanced reporting,
            <br className="hidden sm:block" /> AcuSky delivers custom-built
            solutions on the same clean, scalable architecture as our core
            software.
          </p>
        </div>
      </div>

      <div className="relative mt-12 md:mt-60 lg:mt-8">
        <div className="relative md:min-h-[200px]">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:hidden">
            {cardData.map((c, i) => (
              <CardItem
                key={c.id}
                c={c}
                index={i}
                isActive={active === i}
                height={160}
              />
            ))}
          </div>

          <div
            className="
    hidden md:grid
    grid-cols-2 lg:grid-cols-4
    gap-[clamp(16px,1vw,48px)]
    absolute -bottom-4 left-1/2 -translate-x-1/2
    w-[clamp(768px,100vw,2400px)]
  "
          >
            {cardData.map((c, i) => (
              <CardItem
                key={c.id}
                c={c}
                index={i}
                isActive={active === i}
                height={170}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
