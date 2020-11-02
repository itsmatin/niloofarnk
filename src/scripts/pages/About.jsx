import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../sections/AboutHeader";
import AboutIntroduction from "../sections/AboutIntroduction";
import AboutAcademics from "../sections/AboutAcademics";
import AboutExperience from "../sections/AboutExperience";

const About = () => {
  return (
    <motion.div className="about">
      <AboutHeader />
      <AboutIntroduction />
      <AboutAcademics />
      <AboutExperience />
    </motion.div>
  );
};

export default About;
