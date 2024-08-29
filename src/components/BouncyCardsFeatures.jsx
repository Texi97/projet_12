import React from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  const commonLink = "https://www.linkedin.com/in/téri-troussier-89707b150/";

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-12 text-slate-800"
      id="parcours"
    >
      <div className="mb-8 flex flex-col items-start justify-center gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="mb-10 max-w-lg text-4xl font-bold md:text-5xl">
          Tout sur
          <span className="text-slate-400"> mon parcours</span>
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4" href={commonLink}>
          <CardTitle>
            OpenClassrooms <br /> <span className="text-base">2023-2024</span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-pink-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              FORMATION D'INTÉGRATRICE WEB
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8" href={commonLink}>
          <CardTitle>
            Inseec, Lyon <br /> <span className="text-base">2021-2023</span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-cyan-500 to-teal-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              MASTER 1 ET 2 COMMUNICATION <br /> en alternance chez Ecilia, à
              Lyon
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8" href={commonLink}>
          <CardTitle>
            Université Jean-Moulin Lyon 3 <br />{" "}
            <span className="text-base">2020-2021</span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              LICENCE PROFESSIONNELLE COMMUNICATION <br /> en alternance à la
              Mutualité Française Saône-et-Loire, à Chalon-sur-Saône
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" href={commonLink}>
          <CardTitle>
            Université de Bourgogne, Dijon <br />{" "}
            <span className="text-base">2016-2018</span>
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-orange-400 to-yellow-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              DUT INFORMATION COMMUNICATION <br /> formation en initial
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, href, children }) => {
  return (
    <motion.a
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </motion.a>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
