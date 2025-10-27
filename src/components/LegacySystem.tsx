import React from "react";
import WhyAirportsChoose from "./WhyAirportsChoose";
import Towersection from "./TowerSection";
import TrustedByAirportsSection from "./TrustedByAirportsSection";
import AirportAnimation from "./AirportAnimation";
import AirportFunctions from "./AirportSection";
import DevelopmentPartner from "./DevelopmentPartnerSection";
 
const LegacySystem = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center flex-col justify-start"
      style={{
        backgroundImage: "url('/LegacyBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Towersection/>
      <AirportFunctions/>
      <WhyAirportsChoose />
      <TrustedByAirportsSection/>
      <AirportAnimation/>
      <DevelopmentPartner/>
    </div>
  );
};
 
export default LegacySystem;