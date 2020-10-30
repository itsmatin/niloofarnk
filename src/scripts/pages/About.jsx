import React from "react";
import { motion } from "framer-motion";
import AboutHeader from "../sections/AboutHeader";
import AboutIntroduction from "../sections/AboutIntroduction";

const About = () => {
  return (
    <motion.div className="about">
      <AboutHeader />
      <AboutIntroduction />
    </motion.div>
  );
};

export default About;
