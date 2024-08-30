import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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
  <div
    className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"
    id="projets"
  >
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Finalisation d'un site one-page
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        724events, une agence événementielle, m'a contacté pour corriger les
        différents bugs qui entravent le bon usage du site par les visiteurs.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        L'agence souhaitait publier la nouvelle version de son site vitrine, il
        s'agissait d'un site one-page.
      </p>

      <section>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700">
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span>En savoir plus</span>
        </button>
      </section>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Création d'une page d'accueil responsive
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Booki, start-up, souhaitait développer un site internet permettant aux
        utilisateurs de trouver des hébergements et des activités dans la ville
        de leur choix.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        L'entreprise avait préparée maquette, spécifications techniques et
        contraintes techniques pour une meilleure compréhension du projet.
      </p>
      <section>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700">
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span>En savoir plus</span>
        </button>
      </section>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Création d'une page web dynamique
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        L'agence ArchiWebos avait besoin de renfort pour la conception du site
        portfolio d'une architecte d'intérieur, Sophie Bluel.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Le site nécessitait également un travail avec le back-end pour permettre
        l'authentification de l'administrateur ainsi que l'upload de nouveaux
        médias.
      </p>
      <section>
        <button className="text-lg font-medium group flex h-10 items-center gap-2 rounded-lg bg-cyan-100 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:pl-2 hover:text-white active:bg-neutral-700">
          <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-sky-500 group-active:-rotate-45" />
          </span>
          <span>En savoir plus</span>
        </button>
      </section>
    </div>
  </div>
);
