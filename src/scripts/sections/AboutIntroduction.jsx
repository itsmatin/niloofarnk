import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "../components/Image";
import { ease, transparent, white } from "../utils/config";

const AboutIntroduction = () => {
  const { scrollYProgress } = useViewportScroll();
  const imageY = useTransform(scrollYProgress, [0.1, 0.6], [0, -100]);
  const textY = useTransform(scrollYProgress, [0.1, 0.6], [0, 200]);
  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.section className="about__introduction">
      <Image
        containerStyle={{ y: imageY }}
        transition={{ ease }}
        containerClass="about__introduction--image"
        src="/niloofar-nikookar.png"
        alt="Niloofar Nikookar - Architectural Designer"
      />
      <motion.div className="about__introduction--triangle" />
      <motion.div
        transition={{ ease }}
        style={{ y: textY }}
        className="about__introduction__text"
      >
        <svg width="1000" height="300">
          <motion.path
            transition={{ damping: 20 }}
            style={{ pathLength: pathLength, opacity: 0.5 }}
            d="M -2000 100 50 100 L 50 50 L 70 50 L 70 100 L 90 100 L 90 50 L 110 50 L 110 100 L 130 100 L 130 50 L 150 50 L 150 100 L 170 100 L 170 50 L 190 50 L 190 100 L 210 50 L 210 100 L 230 50 L 230 100 L 250 50 L 250 100 L 2000 100"
            fill={transparent}
            stroke={white}
            strokeWidth="3"
          />
        </svg>
        <h1>Hey!</h1>
        <p>
          I am a computational and architectural designer and PhD student
          researcher working on human perception, interaction, and human and
          system agency. I currently work on emerging technologies in
          architecture to transform humans’ interaction, connection and dialogue
          with their built environment. In this area I have worked on projects
          addressing episodic experiences and narrative in space, human and
          system’s agency in architectural design and making, and emerging
          design and making paradigms as a result of new technologies.
          Additionally, I have contributed in research related to light-weight
          structures, craft inspired bending active structures in particular.
        </p>
        <p>
          I received my bachelor of Architectural Engineering from Azad
          University of Tehran, then I moved to the United States to pursue my
          graduate education. I hold a professional master of Architecture from
          the Pennsylvania State University and a master of science with a
          concentration on Advanced Production from Georgia Institute of
          Technology. I am currently pursuing a PhD at Carnegie Mellon
          University. My professional experience includes working with
          international firms in the US and Iran on K-12, Justice + Civic and
          residential projects.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutIntroduction;
