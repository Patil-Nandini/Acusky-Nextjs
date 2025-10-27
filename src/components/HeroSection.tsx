"use client";

import { useRouter } from "next/navigation";

export default function HeroAcuSky() {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden min-h-[720px] md:min-h-[780px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Airport_Terminal.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 py-32">
        <div className="md:grid md:grid-cols-2 md:gap-0 flex flex-col gap-8 md:items-center md:py-16 py-12">
          <div className="md:pr-0">
            <div
              className="
                backdrop-blur-2xl bg-white/5
                border border-white/30
                rounded-[22px]
                shadow-[0_8px_60px_rgba(255,255,255,0.1),inset_0_0_25px_rgba(255,255,255,0.05)]
                p-6 sm:p-8 md:p-9
                max-w-[680px]
                transition-all duration-500
                hover:bg-white/8 hover:shadow-[0_8px_60px_rgba(255,255,255,0.15),inset_0_0_25px_rgba(255,255,255,0.1)]
              "
            >
              <h1 className="text-white font-bold leading-tight text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                Built for Growing Airports.
                <br />
                Future-Proof. All-In-One
                <br />
                Software.
              </h1>

              <p className="mt-4 text-white/85 text-sm sm:text-base md:text-[17px] leading-relaxed">
                From operations and gate management to tenant services and
                utilities, AcuSky brings everything together in one software.
                With automated billing, self-service portals, and custom
                programming, AcuSky scales as your airport grows—built on clean,
                future-ready architecture so your airport never gets delayed.
              </p>
              <div className="mt-6">
                <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 w-full max-w-[480px]">
                  <button
                    className="relative w-full h-[70px] sm:h-[80px] md:h-[90px] font-semibold text-white overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => router.push("/under-renovation")}
                  >
                    <object
                      type="image/svg+xml"
                      data="/homepage_button_1.svg"
                      className="absolute inset-0 w-full h-full cursor-pointer"
                    />
                    <span className="relative z-10">See AcuSky in action</span>
                  </button>

                  <button
                    className="relative w-full h-[70px] sm:h-[80px] md:h-[90px] font-semibold text-[#29324C] overflow-hidden rounded-lg bg-transparent cursor-pointer"
                    onClick={() => router.push("/under-renovation")}
                  >
                    <object
                      type="image/svg+xml"
                      data="/homepage_button_2.svg"
                      className="absolute inset-0 w-full h-full  cursor-pointer"
                    />
                    <span className="relative z-10">Schedule a demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-0 flex md:justify-end justify-center">
            <div
              className="
                relative
                w-[min(680px,92vw)]
                md:w-[clamp(820px,88vw,920px)]
                lg:ml-[-140px] md:ml-[-120px]
              "
            >
              <video
                src="/Homepage_Animation.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain select-none pointer-events-none"
                draggable={false}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
