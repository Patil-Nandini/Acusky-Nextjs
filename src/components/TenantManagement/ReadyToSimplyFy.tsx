"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ReadyToSimplyFy() {
  const router = useRouter();

  return (
    <section
      className="relative  min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat   w-[100%]"
      style={{ backgroundImage: "url('/ReadyToSimplyBg.png')" }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/90 via-[#0b1120]/60 to-transparent z-0" /> */}

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-10  w-[100%] h-[100vh]">
        <div
          className="
            backdrop-blur-lg bg-white/10 border border-white/20 rounded-[50px]
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            px-6 sm:px-8 py-10
            text-center lg:text-left ml-10
            w-[60%]
          "
        >
          <h2 className="text-[28px] md:text-[30px] 2xl:text-[40px] font-bold text-[#FAFCFE] leading-snug">
            Ready to Simplify Tenant Management and Accelerate Revenue
            Collections?
          </h2>

          <p className="mt-4 text-[18px] text-white leading-relaxed max-w-[75%]">
            AcuSky unifies tenants, billing, and compliance in one modern,
            all-in-one software - built to scale with your airport.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row  justify-center lg:justify-start">
            {/* Button 1 */}
            <button
              className="relative w-full sm:w-[280px] md:w-[300px] h-[90px] sm:h-[100px] md:h-[110px] font-semibold text-white overflow-hidden rounded-xl cursor-pointer"
              onClick={() => router.push("/under-renovation")}
            >
              <object
                type="image/svg+xml"
                data="/homepage_button_1.svg"
                className="absolute inset-0 w-full h-full"
              />
              <span className="relative z-10 text-[18px] cursor-pointer">
                Book a Demo
              </span>
            </button>

            {/* Button 2 */}
            <button
              className="relative w-full sm:w-[300px] md:w-[320px] h-[90px] sm:h-[100px] md:h-[110px] font-semibold text-[#29324C] overflow-hidden rounded-xl cursor-pointer transition-transform hover:scale-105 ml-[-45px]"
              onClick={() => router.push("/under-renovation")}
            >
              <object
                type="image/svg+xml"
                data="/homepage_button_2.svg"
                className="absolute inset-0 w-full h-full"
              />
              <span className="relative z-10 flex flex-col items-center leading-tight">
                <span className="text-[18px]">
                  Learn How Airports
                </span>
                <span className="text-[18px]">
                  Grow Smarter
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="relative w-[40%] flex justify-end items-end mt-8 lg:mt-0 h-full">
          <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[100vw] h-[100%] flex items-end justify-end">
            <Image
              src="/ReadyToSimplyImg.png"
              alt="AcuSky hologram"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
