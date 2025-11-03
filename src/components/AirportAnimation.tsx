"use client";

export default function AirportAnimation() {
  return (
    <section className="flex flex-col items-center justify-start w-full bg-gradient-to-b from-[#EAF4FF] to-white pt-16 pb-20 overflow-hidden">
      {/* Text Section */}
      <div className="text-center mb-8 sm:mb-12 px-4 w-full">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          From Operations to Revenue - One Seamless Flow
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-[#0F1720]">
          AcuSky eliminates vendor silos with a single all-in-one software that
          manages the entire airport   <br className="hidden sm:block" /> lifecycle — operations, tenants, billing,
          and beyond.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-full">
        <video
          src="/AcuSkyPlane_runway.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        ></video>
      </div>
    </section>
  );
}
