"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroModernizeAirport() {
  const router = useRouter();

  return (
    <section
      className="
        relative w-full
        bg-[url('/ModernAir.jpg')]
        bg-no-repeat bg-center
          pt-[500px] pb-15 sm:pt-72 md:pt-80 lg:pt-96 xl:pt-[460px]
        "
      style={{
        backgroundSize: "100% 100%", 
      }}
    >
      <div
        className="
          relative z-10 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl text-center
          backdrop-blur-md bg-white/10
          border border-white/20 rounded-2xl
         px-6  sm:px-6 py-10
          shadow-[0_8px_32px_rgba(0,0,0,0.4)] mx-8
        "
      >
        <h2 className="text-[30px] md:text-[35px] xl:text-[40px] 2xl:text-[45px] font-bold text-white">
          Modernize Your Airport Today
        </h2>

        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
          Legacy systems slow airports down and drain revenue. AcuSky unifies
          operations, billing, gates, and tenants in one future-proof software
          that scales as you grow.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="relative w-full h-[70px] sm:h-[80px] md:h-[90px] font-semibold text-white overflow-hidden rounded-lg cursor-pointer"
            onClick={() => router.push("/under-renovation")}
          >
            <object
              type="image/svg+xml"
              data="/homepage_button_1.svg"
              className="absolute inset-0 w-full h-full cursor-pointer"
            />
            <span className="relative z-10 text-xs md:text-base cursor-pointer">
              See AcuSky in action
            </span>
          </button>

          <button
            className="relative w-full h-[90px] sm:h-[80px] md:h-[90px] font-semibold text-[#29324C] overflow-hidden mt-[-16px] sm:mt-0 md:ml-[-47px]  cursor-pointer"
            onClick={() => router.push("/under-renovation")}
          >
            <object
              type="image/svg+xml"
              data="/homepage_button_2.svg"
              className="absolute inset-0 w-full h-full cursor-pointer"
            />
            <span className="relative z-10 inline-flex flex-col items-center cursor-pointer">
              <span className="text-xs md:text-base   ">
                Learn How Airports
              </span>
              <span className="text-xs md:text-base   ">Grow Smarter</span>
            </span>
          </button>
        </div>
      </div>

      {/* Optional subtle fade at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000D1F]/60 to-transparent" /> */}
    </section>
  );
}
