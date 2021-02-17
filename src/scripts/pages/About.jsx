import React from "react";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import AboutHeader from "../sections/AboutHeader";
import AboutIntroduction from "../sections/AboutIntroduction";
import AboutAcademics from "../sections/AboutAcademics";
import AboutExperience from "../sections/AboutExperience";
import Ending from "../sections/Ending";
import { ease } from "../utils/config";

const About = () => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ ease }} className="about">
      <Helmet>
        <title>About - Niloofar Nikookar</title>
        <meta
          name="description"
          content="I am a computational and architectural designer and PhD student researcher working on human perception, interaction, and human and system agency. I currently work on emerging technologies in architecture to transform humans’ interaction, connection and dialogue with their built environment"
        />
      </Helmet>
      <AboutHeader />
      <AboutIntroduction />
      <AboutAcademics />
      <AboutExperience />
      <Ending to="/contact" title="Contact me" />
    </motion.div>
  );
};

export default About;
