import { useState } from "react";
import { motion } from "framer-motion";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden"
      id="parcours"
    >
      <div className="p-4">
        <h3 className="text-4xl font-bold">
          Mon parcours <span className="text-slate-400"> universitaire</span>
        </h3>
        <p className="text-slate-500 my-4">
          Voici les quatre étapes de mon parcours universitaires qui me
          permettent auourd'hui d'harmoniser la compréhension des utilisateurs
          avec une expertise techique, pour créer des expériences web
          engageantes et intuitives !
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  university,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between rounded-3xl"
    >
      <p className="text-xl lg:text-3xl font-light  my-8">{description}</p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

const testimonials = [
  {
    description: "Intégratrice Web",
    name: "OpenClassrooms",
    title: "2023-2024",
  },
  {
    description: "Master 1 & 2 en Communication en alternance chez Ecilia",
    name: "INSEEC, Lyon",
    title: "2021-2023",
  },
  {
    description:
      "Licence Professionnelle Communication en alternance à la Mutualité Française Saône-et-Loire",
    name: "Université Jean-Moulin, Lyon",
    title: "2020-2021",
  },
  {
    description: "DUT Information-Communication",
    name: "Université de Bourgogne, Dijon",
    title: "2016-2018",
  },
];
