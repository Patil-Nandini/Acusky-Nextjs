// "use client"
// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const splitText = (text, by = "letter") =>
//   by === "word" ? text.split(" ") : text.split("");

// export default function AirportAnimation() {
//   // Animation controls
//   const planeControls = useAnimation();

//   // Runway lines
//   const numMarkings = 6;
//   const numDashed = 8;
//   const markingControls = Array.from({ length: numMarkings }, () => useAnimation());
//   const dashedControls = Array.from({ length: numDashed }, () => useAnimation());

//   // Text animation: split into words (or use "letter" for letter-by-letter)
//   const fullText = "With AcuSky, airports manage the entire workflow — from gate assignments to revenue.";
//   const textItems = splitText(fullText, "word");
//   const textControls = textItems.map(() => useAnimation());

//   // Animation settings
//   const duration = 25; // seconds
//   const runwayWidth = 80; // vw plane travel

//   useEffect(() => {
//     // Plane moves for 25s
//     planeControls.start({ x: `${runwayWidth}vw`, transition: { duration, ease: "linear" } });

//     // Animate Markings: fade out as plane passes
//     for (let i = 0; i < numMarkings; i++) {
//       setTimeout(() => {
//         markingControls[i].start({ opacity: 0, transition: { duration: 0.3 } });
//       }, (duration * 1000 / numMarkings) * i);
//     }
//     // Animate Dashed Lines: fade out as plane passes
//     for (let i = 0; i < numDashed; i++) {
//       setTimeout(() => {
//         dashedControls[i].start({ opacity: 0, transition: { duration: 0.3 } });
//       }, (duration * 1000 / numDashed) * i);
//     }
//     // Animate Text: reveal word-by-word as plane passes (sync to animation)
//     for (let i = 0; i < textItems.length; i++) {
//       setTimeout(() => {
//         textControls[i].start({ opacity: 1, transition: { duration: 0.3 } });
//       }, (duration * 1000 / textItems.length) * i);
//     }
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-100 to-blue-200 overflow-hidden flex flex-col justify-center items-center">
//       {/* Runway */}
//       <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-40 bg-gray-700 border-y-4 border-yellow-300 flex items-center">
//         {/* Markings (left, fade one by one) */}
//         <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
//           {Array.from({ length: numMarkings }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="w-10 h-2 bg-white rounded"
//               initial={{ opacity: 1 }}
//               animate={markingControls[i]}
//             />
//           ))}
//         </div>
//         {/* Dashed center line (fade one by one) */}
//         <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center space-x-8">
//           {Array.from({ length: numDashed }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="w-20 h-3 bg-white rounded"
//               initial={{ opacity: 1 }}
//               animate={dashedControls[i]}
//             />
//           ))}
//         </div>
//         {/* Runway Text: word-by-word reveal */}
//         <div className="absolute left-40 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 whitespace-nowrap flex gap-1">
//           {textItems.map((word, i) => (
//             <motion.span
//               key={i}
//               initial={{ opacity: 0 }}
//               animate={textControls[i]}
//               style={{ display: "inline-block" }}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </div>
//         {/* Plane */}
//         <motion.img
//           src="/PlaneImage.png"
//           alt="Plane"
//           className="absolute z-20 top-1/2 left-[-200px] transform -translate-y-1/2 w-44"
//           initial={{ x: 0 }}
//           animate={planeControls}
//           style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.36))" }}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AirportAnimation() {
  // Single controls created at top level (Hooks called unconditionally)
  const planeControls = useAnimation();
  const markingContainer = useAnimation();
  const dashedContainer = useAnimation();
  const textContainer = useAnimation();

  const numMarkings = 6;
  const numDashed = 8;

  const textItems = useMemo(
    () =>
      "With AcuSky, airports manage the entire workflow — from gate assignments to revenue.".split(
        " "
      ),
    []
  );

  const duration = 25;
  const runwayWidth = 80;

  // Variants that use the `custom` prop (index) to stagger animation timing
  const markingVariant = {
    visible: { opacity: 1 },
    hidden: (i: number) => ({
      opacity: 0,
      transition: { duration: 0.3, delay: (duration / numMarkings) * i },
    }),
  };

  const dashedVariant = {
    visible: { opacity: 1 },
    hidden: (i: number) => ({
      opacity: 0,
      transition: { duration: 0.3, delay: (duration / numDashed) * i },
    }),
  };

  const textChildVariant = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { duration: 0.3, delay: (duration / textItems.length) * i },
    }),
  };

  useEffect(() => {
    // Move plane across runway
    planeControls.start({
      x: `${runwayWidth}vw`,
      transition: { duration, ease: "linear" },
    });

    // Trigger the marking and dashed children to animate to "hidden" with their own delays
    markingContainer.start("hidden");
    dashedContainer.start("hidden");

    // Trigger text children to appear staggered
    textContainer.start("visible");
  }, [
    planeControls,
    markingContainer,
    dashedContainer,
    textContainer,
    duration,
    runwayWidth,
    numMarkings,
    numDashed,
    textItems.length,
  ]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-100 to-blue-200 overflow-hidden flex flex-col justify-center items-center">
      {/* Runway */}
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-40 bg-gray-700 border-y-4 border-yellow-300 flex items-center">
        {/* Markings */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {Array.from({ length: numMarkings }).map((_, i) => (
            <motion.div
              key={i}
              className="w-10 h-2 bg-white rounded"
              variants={markingVariant}
              custom={i}
              initial="visible"
              animate={markingContainer}
            />
          ))}
        </div>

        {/* Dashed Line */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center space-x-8">
          {Array.from({ length: numDashed }).map((_, i) => (
            <motion.div
              key={i}
              className="w-20 h-3 bg-white rounded"
              variants={dashedVariant}
              custom={i}
              initial="visible"
              animate={dashedContainer}
            />
          ))}
        </div>

        {/* Text */}
        <div className="absolute left-40 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold z-10 whitespace-nowrap flex gap-1">
          {textItems.map((word, i) => (
            <motion.span
              key={i}
              variants={textChildVariant}
              custom={i}
              initial="hidden"
              animate={textContainer}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Plane */}
        <motion.img
          src="/PlaneImage.png"
          alt="Plane"
          className="absolute z-20 top-1/2 left-[-200px] transform -translate-y-1/2 w-44"
          initial={{ x: 0 }}
          animate={planeControls}
          style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.36))" }}
        />
      </div>
    </div>
  );
}
