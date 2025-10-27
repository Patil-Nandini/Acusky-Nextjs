"use client";
 
import Image from "next/image";
 
export default function Towersection() {
  const problems = [
    {
      icon: "/outdated.svg",
      alt: "Outdated software",
      text: "Outdated software means manual work, delays, and costly errors.",
    },
    {
      icon: "/disconnected.svg",
      alt: "Disconnected vendor modules",
      text: "Disconnected vendor modules create silos, wasted staff hours, and higher costs.",
    },
    {
      icon: "/monolithic.svg",
      alt: "Monolithic systems",
      text: "Monolithic systems produce “spaghetti code” that can’t scale.",
    },
    {
      icon: "/growing.svg",
      alt: "Growing airports outpace",
      text: "Growing airports outpace legacy systems faster than they can adapt–hurting revenue and efficiency.",
    },
  ];
  return (
    <div className="relative w-[100%]  h-full flex flex-col items-center justify-center mx-auto">
      <section
        className="
    relative w-full h-[190vh] sm:h-[150vh] md:h-[150vh] lg:h-[130vh] xl:h-[150vh] flex items-start justify-start pt-2 lg:pt-10
    bg-no-repeat bg-cover  lg:bg-cover  bg-center
    bg-[url('/LegacyBgImage.png')]
  "
      >
        <div className="w-[100%] flex flex-col items-center justify-between relative z-10">
          <div className="text-center mb-8 z-20">
            <h1 className="text-[30px] md:text-[35px] xl:text-[36px] 2xl:text-[45px]  font-bold text-[#222c3a] mb-3">
              Legacy Systems Slow Airports Down and Drain Revenue
            </h1>
            <p className="text-[18px] xl:text-[20px] text-[#394859] leading-relaxed max-w-2xl xl:max-w-5xl mx-auto">
              Legacy software isn&apos;t just outdated – it&apos;s costing
              airports time, efficiency,
              <br className="hidden sm:block" />
              and millions in lost revenue every year.
            </p>
          </div>
        </div>
        <></>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 lg:gap-30  xl:gap-10  w-[90%] justify-center items-stretch
    -mt-55   sm:-mt-56 md:-mt-66 lg:-mt-50 xl:-mt-66 2xl:-mt-50 mb-20">
        {problems.map((problem, idx) => (
          <div
            key={idx}
            className="relative flex-1 min-w-[250px] bg-white/60 border border-[#e0eafd] rounded-2xl shadow-md flex flex-col items-center p-4 text-center"
            style={{
              //   backdropFilter: "blur(2px)",
              borderImageSource:
                "linear-gradient(96.34deg, #FFFFFF 6.43%, #C9E8FF 49.5%, #FFFFFF 95.54%)",
              background:
                "radial-gradient(93.96% 93.96% at 50% 56.38%, rgba(223, 239, 255, 0.1) 0%, rgba(58, 167, 255, 0.1) 100%)",
              boxShadow:
                "0px 0px 1px 12px #FFFFFF66, 0px 4px 4px 0px #0000001A",
            }}
          >
            <div className="absolute top-[-49px] left-1/2 -translate-x-1/2 -translate-y-1/3 w-30 h-30 flex items-center justify-center z-0">
              <Image
                src={problem.icon}
                alt={problem.alt}
                width={68}
                height={68}
                className="object-contain"
                priority={idx === 0}
              />
            </div>
 
            <div className="mt-8 text-[#504E4E] text-[18px] lg:text-[20px] flex items-center justify-center">
              {problem.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}