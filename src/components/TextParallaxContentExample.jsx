import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaReact,
  FaYarn,
  FaNodeJs,
  FaGoogle,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiSwagger } from "react-icons/si";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="724events"
        heading="Débuggage d'une agence événementielle."
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Booki"
        heading="Intégration d'une interface utilisateur."
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Sophie Bluel"
        heading="Conception d'un site portfolio."
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = () => (
  <div className="mx-auto flex max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 ">
    <div className="flex flex-col gap-8">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Finalisation d'un site one-page
      </h2>
      <section className="flex flex-col gap-3">
        <a
          href="https://github.com/Texi97/724_events.git"
          className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700 w-fit"
          target="_blank"
          rel="noreferrer"
        >
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span className="flex flex-row gap-2 justify-items-center">
            GitHub
          </span>
        </a>
        <a
          href="https://724-events-zeta.vercel.app/"
          target="_blank"
          className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700 w-fit"
          rel="noreferrer"
        >
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span className="flex flex-row gap-2 justify-items-center">
            Lien du site
          </span>
        </a>
      </section>
    </div>
    <div className="col-span-1 md:col-span-8 flex flex-col justify-between">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        724events, une agence événementielle, m'a contacté pour corriger les
        différents bugs qui entravent le bon usage du site par les visiteurs.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        L'agence souhaitait publier la nouvelle version de son site vitrine, il
        s'agissait d'un site one-page.
      </p>

      <section className="flex flex-row gap-3 flex-wrap">
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#EFF6FC] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#61DAFB]">
            <IconContext.Provider
              value={{ color: "#61DAFB", className: "global-class-name" }}
            >
              <div>
                <FaReact />
              </div>
            </IconContext.Provider>
            React
          </span>
        </button>

        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#F7F6F3] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#877D38]">
            <IconContext.Provider
              value={{ color: "#F0DB4F", className: "global-class-name" }}
            >
              <div>
                <RiJavascriptFill />
              </div>
            </IconContext.Provider>
            JavaScript
          </span>
        </button>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#F1EEF9] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#2C2560]">
            <IconContext.Provider
              value={{ color: "#2C2560", className: "global-class-name" }}
            >
              <div>
                <FaYarn />
              </div>
            </IconContext.Provider>
            Yarn
          </span>
        </button>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#DDF9D8] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#509941]">
            <IconContext.Provider
              value={{
                color: "#509941",
                className: "global-class-name",
              }}
            >
              <div>
                <FaNodeJs />
              </div>
            </IconContext.Provider>
            Node JS
          </span>
        </button>
        <button className="text-lg font-medium group flex items-center gap-2 rounded-lg bg-[#E2F3FF] pl-3 pr-4 cursor-auto h-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#477CEE]">
            <IconContext.Provider
              value={{ color: "#477CEE", className: "global-class-name" }}
            >
              <div>
                <FaGoogle />
              </div>
            </IconContext.Provider>
            Chrome DevTools
          </span>
        </button>
      </section>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto flex max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="flex flex-col gap-8 justify-between">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Création d'une page d'accueil responsive
      </h2>
      <section className="flex flex-col gap-3">
        <a
          href="https://github.com/Texi97/Booki.git"
          target="_blank"
          className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700 w-fit"
          rel="noreferrer"
        >
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span className="flex flex-row gap-2 justify-items-center">
            GitHub
          </span>
        </a>
        <a
          href="https://texi97.github.io/Booki/"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700 w-fit"
        >
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span className="flex flex-row gap-2 justify-items-center">
            Lien du site
          </span>
        </a>
      </section>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Booki, start-up, voulait créer un site web pour trouver des hébergements
        et activités dans la ville choisie par l'utilisateur.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        L'entreprise avait déjà préparé maquettes, spécifications techniques et
        contraintes techniques.
      </p>
      <section className="flex flex-row gap-3 flex-wrap">
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#F6EEF1] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#E66140]">
            <IconContext.Provider
              value={{ color: "#E66140", className: "global-class-name" }}
            >
              <div>
                <FaHtml5 />
              </div>
            </IconContext.Provider>
            HTML
          </span>
        </button>

        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#ECF0F8] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#3873B7]">
            <IconContext.Provider
              value={{ color: "#3873B7", className: "global-class-name" }}
            >
              <div>
                <FaCss3Alt />
              </div>
            </IconContext.Provider>
            CSS
          </span>
        </button>
      </section>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto flex max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="flex flex-col gap-8 justify-between">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Création d'une page web dynamique
      </h2>
      <section className="flex flex-col gap-3">
        <a
          href="https://github.com/Texi97/Sophie-Bluel.git"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700 w-fit"
        >
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span className="flex flex-row gap-2 justify-items-center">
            GitHub
          </span>
        </a>
      </section>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        L'agence ArchiWebos avait besoin de renfort pour la conception du site
        portfolio d'une architecte d'intérieur.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Nécessité de retravailler le back-end pour permettre l'authentification
        de l'administrateur et certains uploads.
      </p>
      <section className="flex flex-row gap-3 flex-wrap">
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#F6EEF1] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#877D38]">
            <IconContext.Provider
              value={{ color: "#F0DB4F", className: "global-class-name" }}
            >
              <div>
                <RiJavascriptFill />
              </div>
            </IconContext.Provider>
            JavaScript
          </span>
        </button>

        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#ECF0F8] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#509941]">
            <IconContext.Provider
              value={{
                color: "#509941",
                className: "global-class-name",
              }}
            >
              <div>
                <FaNodeJs />
              </div>
            </IconContext.Provider>
            Node JS
          </span>
        </button>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-[#E5F0CC] pl-3 pr-4 cursor-auto">
          <span className="flex flex-row gap-2 justify-items-center items-center text-[#6D9A00]">
            <IconContext.Provider
              value={{
                color: "#6D9A00",
                className: "global-class-name",
              }}
            >
              <div>
                <SiSwagger />
              </div>
            </IconContext.Provider>
            Swagger{" "}
          </span>
        </button>
      </section>
    </div>
  </div>
);
