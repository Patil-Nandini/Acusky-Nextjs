"use client";
import Image from "next/image";
 
type Feature = {
  icon: string;
  title: string;
  desc: string;
  radius: string;
};
 
const FEATURES: Feature[] = [
  {
    icon: "/IconSection1.png",
    title: "50% Faster Invoicing",
    desc: "Automate billing and speed collections.",
    radius: "50% 14px 14px 50%",
  },
  {
    icon: "/IconSection2.png",
    title: "15% Higher Revenue Capture",
    desc: "No more missed charges or billing errors.",
    radius: "10px",
  },
  {
    icon: "/IconSection3.png",
    title: "30% Fewer Manual Hours",
    desc: "Reduce staff time spent on outdated processes.",
    radius: "10px",
  },
  {
    icon: "/IconSection4.png",
    title: "100% Configurable",
    desc: "Custom solutions built for each airport's needs.",
    radius: "10px 10px 50% 10px",
  },
];
 
export default function TrustedByAirportsSection() {
  return (
    <section className="w-full pb-12 px-3">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Trusted by Airports That Refuse to Settle for Legacy Software
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Airports partner with AcuSky to modernize operations, increase revenue, and simplify management
          <br className="hidden sm:block" />
          with software built for growth.
        </p>
      </div>
 
      {/* ====== Layout ====== */}
      <div className="mx-auto w-full max-w-[1440px] grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 2xl:gap-16">
        {/* Left Section */}
        <div className="xl:col-span-8 2xl:col-span-9">
          <div
            className="rounded-[24px] p-3 sm:p-4 shadow-[inset_0_0_15px_0_#0396FF40]"
            style={{ background: "#B4DDFE" }}
          >
            <div
              className="relative overflow-visible rounded-2xl p-3 sm:p-5 md:p-7 min-h-[640px] sm:min-h-[520px] md:min-h-[560px]"
              style={{ background: "linear-gradient(180deg, #1768B8 0%, #3B97DA 100%)" }}
            >
              {/* Inner Panel */}
              <div
                className="relative mx-auto mt-5 sm:mt-8 h-auto w-[94%] sm:w-[85%] md:w-[78%]"
                style={{
                  background: "#9EC3F0",
                  borderRadius: "0 60px 60px 60px",
                  boxShadow: "0px 4px 47px 0px #006B9240",
                  padding: "24px 16px",
                }}
              >
                {/* Logo */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <Image
                    src="/CircleAcusKyLogo.png"
                    alt="AcuSky"
                    width={120}
                    height={120}
                    className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] md:w-[110px] md:h-[110px]"
                  />
                </div>
 
                {/* Features Grid - ✅ Now 1 column on mobile */}
                <div
                  className="
                    mt-10 grid gap-4 sm:gap-5 md:gap-6
                    grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-4
                    w-full justify-items-center
                  "
                >
                  {FEATURES.map((f, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-start text-center border border-black/5 w-full sm:w-auto max-w-[260px]"
                      style={{
                        background: "linear-gradient(180deg, #FBFCFE 0%, #E1F3FF 100%)",
                        boxShadow: "inset 0px 0px 17px 0px #48B3EC66",
                        borderRadius: f.radius,
                        padding: "18px 16px",
                        minHeight: "190px",
                      }}
                    >
                      <Image
                        src={f.icon}
                        alt={f.title}
                        width={100}
                        height={100}
                        className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] mb-2"
                      />
                      <h4 className="text-[#164b6e] font-semibold text-[14px] sm:text-[15px] leading-tight min-h-[36px]">
                        {f.title}
                      </h4>
                      <p className="text-[#2a506b] text-[12px] sm:text-[13px] mt-2">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Plane Banner */}
              <div
                className="
                  relative mx-auto mt-8 sm:mt-24 md:mt-28
                  w-[94%] sm:w-[85%] md:w-[78%]
                  rounded-[12px] bg-[#AFCDFF63] backdrop-blur-md
                "
              >
                <Image
                  src="/PlaneLineLeft.svg"
                  alt="Plane Left"
                  width={220}
                  height={80}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[110px] sm:w-[180px] md:w-[200px]"
                />
                <Image
                  src="/PlaneLineRight.svg"
                  alt="Plane Right"
                  width={220}
                  height={80}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-[110px] sm:w-[180px] md:w-[200px]"
                />
                <div className="relative px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                  <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                    Airports choose AcuSky because it offers one software that simplifies operations,
                    reduces costs, and grows as they do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Testimonials */}
        <div className="xl:col-span-4 2xl:col-span-3 flex flex-col gap-6 sm:gap-8 xl:gap-8">
          {/* Testimonial 1 */}
          <div className="relative w-full max-w-[min(96vw,560px)] mx-auto h-[240px] sm:h-[300px]">
            <Image
              src="/testimonialCardBg.png"
              alt="Testimonial Card"
              fill
              className="object-contain rounded-[20px]"
            />
            <div className="absolute inset-0 flex items-start justify-center py-1 px-1 sm:py-2 md:py-4 md:px-4 lg:py-6 xl:py-1">
              <div className="w-[45%]  lg:w-[40%] xl:w-[50%]">
                <p className="text-[#504E4E] text-[12px] sm:text-[14px] mb-2 sm:mb-3">
                  “With AcuSky, we cut invoicing time in half and improved tenant satisfaction
                  immediately. The self-service portal was a game changer.”
                </p>
                <p className="font-semibold text-[#000000E5] text-[13px] sm:text-[14px] text-center">
                  – Airport CFO
                </p>
              </div>
            </div>
          </div>
 
          {/* Testimonial 2 */}
          <div className="relative w-full max-w-[min(98vw,480px)] mx-auto h-[240px] sm:h-[300px]">
            <Image
              src="/testimonialCardBg.png"
              alt="Testimonial Card"
              fill
              className="object-contain rounded-[20px]"
            />
            <div className="absolute inset-0 flex items-start justify-center py-2 sm:py-10 lg:py-6 xl:py-1">
              <div className="w-[45%] lg:w-[40%] xl:w-[50%]">
                <p className="text-[#504E4E] text-[12px] sm:text-[14px] mb-2 sm:mb-3">
                  “Our old system couldn’t keep up with growth. AcuSky gave us one modern software
                  that scales with us.”
                </p>
                <p className="font-semibold text-[#000000E5] text-[12px] sm:text-[14px] text-center">
                  – Airport Director of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}