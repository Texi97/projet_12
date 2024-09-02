import React from "react";
import { VelocityHero } from "../components/VelocityHero";
import { ProjectsTitle } from "../components/ProjectsTitle";
import { TextParallaxContentExample } from "../components/TextParallaxContentExample";
import "../../src/index.css";
import { VanishText } from "../components/VanishText";
import StackedCardTestimonials from "../components/StackedCardTestimonials";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div>
      <VelocityHero />
      <ProjectsTitle />
      <TextParallaxContentExample />
      <VanishText />
      <StackedCardTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
