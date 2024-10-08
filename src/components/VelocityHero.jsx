import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

export const VelocityHero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="h-[500vh] bg-neutral-50 text-neutral-950 mb-100px"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
        <Nav />
        <CenterCopy />
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
        >
          Crafting digital experiences with passion and precision.
        </motion.p>
        <ScrollArrow />
      </div>
    </section>
  );
};

const Nav = () => {
  return (
    <div className="relative mb-1 flex w-full justify-between p-6">
      <p className="hidden text-xs text-neutral-400 md:block">
        46° 46' 59" N, 4° 51' 12" E
        <br />
      </p>
      <Logo />
      <Links />
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/

  return (
    <svg
      width="36"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-1/2 h-fit -translate-y-1/2 translate-x-0 fill-neutral-950 md:right-1/2 md:translate-x-1/2"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Links = () => {
  return (
    <nav className="flex gap-3 text-sm">
      <a href="#projets">Projets</a>
      <a href="#parcours">Parcours</a>
    </nav>
  );
};

const CenterCopy = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <img
        src="/img/hero_image.jpg"
        alt="Colorful"
        className="mr-2 h-full w-20 bg-neutral-200 object-cover"
      />
      <h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
        Moi c'est Téri. <br />
        Intégratrice web. <br />
        En quête de{" "}
        <span className="inline-block -skew-x-[18deg] font-black text-neutral-950 ">
          PROJETS.
        </span>
      </h1>
    </div>
  );
};

const ScrollArrow = () => {
  return (
    <>
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
    </>
  );
};
