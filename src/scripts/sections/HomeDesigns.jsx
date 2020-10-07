import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";

const HomeDesigns = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.section ref={ref} className="home__designs">
      <h1 className="home__designs--title">
        <AnimatedText isVisible={inView}>DESIGNS</AnimatedText>
      </h1>
    </motion.section>
  );
};

export default HomeDesigns;
