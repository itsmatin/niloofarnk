import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";

const HomeDesigns = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.section ref={ref} className="home__designs">
      <h1 className="home__designs--title">
        <AnimatedText isVisible={inView}>DESIGNS</AnimatedText>
        <motion.div
          drag="x"
          dragElastic={0.05}
          className="home__designs--container"
        >
          <motion.span className="home__designs--counter">01 / 04</motion.span>
          <Image
            imageClass="home__designs--image"
            containerClass="home__designs--image-container"
            main="capture.jpg"
            text="2019 - 2020"
          />
          <Image
            imageClass="home__designs--image"
            containerClass="home__designs--image-container"
            main="capture.jpg"
            text="2019 - 2020"
          />
          <Image
            imageClass="home__designs--image"
            containerClass="home__designs--image-container"
            main="capture.jpg"
            text="2019 - 2020"
          />
        </motion.div>
      </h1>
    </motion.section>
  );
};

export default HomeDesigns;
