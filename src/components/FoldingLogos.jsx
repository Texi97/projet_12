import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight } from "react-icons/fi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaYarn, FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export const FoldingLogos = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row mt-24">
      <Copy />
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-[#61DAFB] text-neutral-900">
            <FaReact />
          </LogoItem>,
          <LogoItem key={2} className="bg-[#8e87bf] text-neutral-900">
            <FaYarn />
          </LogoItem>,
          <LogoItem key={3} className="bg-[#509941] text-neutral-900">
            <FaNodeJs />
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            <SiGithub />
          </LogoItem>,
          <LogoItem key={5} className="bg-[#F0DB4F] text-neutral-900">
            <RiJavascriptFill />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const Copy = () => (
  <div className="max-w-lg text-center md:text-start">
    <h2 className="mb-3 text-4xl text-white">Votre vision, mon expertise.</h2>
    <p className="mb-6 text-sm leading-relaxed text-neutral-400">
      Je conçois et développe des sites web modernes, rapides et sécurisés. Mon
      expertise technique et mon sens de l'esthétique garantissent des résultats
      professionnels qui répondent parfaitement à vos besoins.
    </p>
    <a
      href="mailto:teri.trouss@gmail.com"
      className="group text-sm uppercase text-indigo-300 transition-colors hover:text-indigo-400"
    >
      Parlez-moi de votre projet
      <FiArrowUpRight className="inline-block text-base transition-transform group-hover:rotate-45" />
    </a>
  </div>
);

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
