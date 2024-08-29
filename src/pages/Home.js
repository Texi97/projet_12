import React from "react";
import { VelocityHero } from "../components/VelocityHero";
import { ProjectsTitle } from "../components/ProjectsTitle";
import { TextParallaxContentExample } from "../components/TextParallaxContentExample";
import "../../src/index.css";
import { BouncyCardsFeatures } from "../components/BouncyCardsFeatures";
import { VanishText } from "../components/VanishText";

const Home = () => {
  return (
    <div>
      <VelocityHero />
      <ProjectsTitle />
      <TextParallaxContentExample />
      <VanishText />
      <BouncyCardsFeatures />
    </div>
  );
};

export default Home;
