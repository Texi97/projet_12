import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowingChip from "./GlowingChip";

export const VanishText = () => {
  return (
    <div className="bg-slate-700 px-4 pt-24 pb-48 text-center md:py-36 mt-12 mb-24 flex flex-col items-center gap-8">
      <GlowingChip>
        <span className="text-green-400">•</span> Actuellement en ligne
      </GlowingChip>
      <h3 className="text-3xl font-medium text-slate-400 sm:text-4xl md:text-5xl lg:text-6xl">
        Je réalise votre site
        <AnimatedText
          phrases={["Vitrine", "Portfolio", "eCommerce", "One-page"]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative mb-14 mt-2 w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="absolute left-1/2 top-0 w-full text-violet-50"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};
