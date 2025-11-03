"use client";

import Image from "next/image";
import { FC } from "react";

type CardItem = {
  title: string;
  desc: string;
  icon: string;
};

const leftCards: CardItem[] = [
  {
    title: "Operations & Gate Management",
    desc: "Real-time control over gates, flights, and daily operations.",
    icon: "/Icon1.svg",
  },
  {
    title: "Billing & Revenue",
    desc: "Automated invoicing, accurate collections, and improved revenue visibility.",
    icon: "/Icon2.svg",
  },
  {
    title: "Tenant Services",
    desc: "Self-service tenant portal, lease management, and utility tracking.",
    icon: "/Icon3.svg",
  },
];

const rightCards: CardItem[] = [
  {
    title: "Space Management",
    desc: "Allocate, track, and optimize terminal and facility space for maximum efficiency.",
    icon: "/Icon4.svg",
  },
  {
    title: "Work Orders",
    desc: "Streamline maintenance with automated work order creation, tracking, and resolution.",
    icon: "/Icon5.svg",
  },
  {
    title: "Custom Development",
    desc: "Tailored features and integrations to fit your airport’s unique needs.",
    icon: "/Icon6.svg",
  },
];

const Card: FC<CardItem> = ({ title, desc, icon }) => {
  return (
    <div
      className="
        relative flex items-stretch gap-4 overflow-visible
        rounded-2xl border border-slate-200/70
        bg-transparent backdrop-blur-sm 
        shadow-sm hover:shadow-md transition-shadow
        p-4 sm:p-5

        [--canvas:#eaf3ff]
        [--divider-x:80px] sm:[--divider-x:84px]
        [--notchW:12px] [--notchH:24px]
      "
      style={{
        backgroundImage: "url('/Card_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        // background:"#D7EAFF99",
      }}
    >
      <svg
        aria-hidden
        className="
          pointer-events-none absolute z-10 block
          left-35 top-2.5
          -translate-x-1/2 -translate-y-1/2 rotate-180 
        "
        style={{ width: "var(--notchW)", height: "var(--notchH)" }}
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q50,10 100,50"
          fill="var(--canvas)"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="1"
        />
      </svg>

      <svg
        aria-hidden
        className="
          pointer-events-none absolute z-10 block
          left-35 bottom-2.5
          -translate-x-1/2 translate-y-1/2 
        "
        style={{ width: "var(--notchW)", height: "var(--notchH)" }}
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q50,10 100,50"
          fill="var(--canvas)"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="1"
        />
      </svg>

      <div className="flex-shrink-0 grid place-items-center ">
        <div
          className="
            relative h-44 w-28 grid place-items-center
            before:content-[''] before:absolute before:-inset-2
            before:bg-[url('/IconDiv_bg.png')] before:bg-no-repeat
            before:bg-center before:bg-contain 
          "
          aria-hidden={false}
        >
          <div className="relative z-10 h-12 w-12 rounded-xl bg-[#1D81CEBF] ring-1 ring-black/25 grid place-items-center ">
            <Image
              src={icon}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="
          w-px self-stretch
          border-l border-dashed border-[#000000]
          -ml-2 mr-2
        "
      />

      <div className="min-w-0 flex-1 justify-center place-content-center">
        <h4 className="text-[#17012C] text-base sm:text-lg font-bold xl:text-[20px] leading-tight ">
          {title}
        </h4>
        <p className="mt-1 text-[#504E4E] text-sm sm:text-base lg:text-sm xl:text-xl leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Column: FC<{ items: CardItem[] }> = ({ items }) => (
  <div className="flex flex-col gap-4 sm:gap-5">
    {items.map((item) => (
      <Card key={item.title} {...item} />
    ))}
  </div>
);

const AirportFunctions: FC = () => {
  return (
    <section
      className="
        relative mx-auto w-full
        px-4 sm:px-6 lg:px-10 xl:px-16
        pb-10 sm:pb-14 lg:pb-20
        bg-[radial-gradient(60%_60%_at_50%_-10%,#e6f1ff_0%,rgba(255,255,255,0)_70%)]
      "
    >
      <div className="mx-auto  text-center">
        <h2 className="text-[30px] md:text-[35px] xl:text-[36px] 2xl:text-[45px] font-bold tracking-wide text-[#0F1720]">
          One Software. Every Airport Function. Built to Scale.
        </h2>
        <p className="mt-3 sm:mt-4 text-[#394859] text-[18px] xl:text-[20px] max-w-2xl xl:max-w-6xl mx-auto tracking-normal leading-snug ">
          AcuSky gives airports a single, modern software to manage operations,
          revenue, and tenants—replacing multiple vendors and outdated tools
          with one future-proof solution.
        </p>
      </div>

      <div
        className="
          mt-10 lg:mt-14
          grid gap-6 lg:gap-10
          grid-cols-1 lg:grid-cols-3
          items-start lg:items-center
        "
      >
        <Column items={leftCards} />

        <div
          className="
            order-first lg:order-none
         justify-self-center  
            w-full max-w-sm sm:max-w-md lg:max-w-[420px]
          "
        >
          <div className="relative aspect-[3/4] w-full overflow-visible ">
            <video
              src="/AcuSky_PlaneMask.webm"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-cover w-full h-full"
            ></video>
          </div>
        </div>

        <Column items={rightCards} />
      </div>

      <div className="relative mx-auto mt-12 sm:mt-16 md:mt-20  text-center ">
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
          className=" absolute right-0 md:-right-5 lg:right-0 top-12 sm:top-2 md:-top-2  lg:-top-5  w-[160px] sm:w-[200px] md:w-[240px] z-15"
        />

        <div className="relative bg-[#AFCDFF63] backdrop-blur-md border border-slate-200/60 shadow-md rounded-2xl px-4 sm:px-8 md:px-1 py-5 sm:py-2">
          <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed">
            With AcuSky, airports of every size can run smarter, scale faster,
            and simplify operations in one all-in-one software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AirportFunctions;
