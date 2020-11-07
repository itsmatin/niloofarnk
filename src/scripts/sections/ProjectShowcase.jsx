import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { white, transparent } from "../utils/config";
import Image from "../components/Image";

const ProjectShowcase = () => {
  const { scrollYProgress } = useViewportScroll();
  const imageScale = useTransform(scrollYProgress, [0.5, 0.9], [0.7, 1]);
  const pathLength = useTransform(scrollYProgress, [0.2, 0.9], [0, 1]);

  return (
    <motion.section className="project__showcase">
      <svg className="project__showcase__drawing" width="830" height="800">
        <motion.path
          transition={{ damping: 20 }}
          d="M 800 800 L 800 250 Q 750 150 700 250 L 700 500 L 600 500 C 500 300 600 50 600 50 L 400 50 C 400 50 500 300 400 500 L 350 500 L 350 100 L 250 100 L 250 500 L 200 500 L 100 150 L 50 150 L 50 500 L 0 500"
          style={{ pathLength: pathLength, opacity: 0.5 }}
          fill={transparent}
          stroke={white}
          strokeWidth="3"
        />
      </svg>
      <h1 className="project__showcase--title">Showcase</h1>
      <Image
        containerStyle={{ scale: imageScale }}
        containerClass="project__showcase--image"
        main="/capstone/Details2.png"
      />
    </motion.section>
  );
};

export default ProjectShowcase;
