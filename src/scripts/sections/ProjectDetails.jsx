import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { grey, black, ease, white } from "../utils/config";
import Image from "../components/Image";

const shapeVariants = {
  grey: { backgroundColor: grey },
  black: { backgroundColor: black },
};

const textVariants = {
  white: { color: white },
  black: { color: black },
};
const ProjectDetails = ({ bgColor, project }) => {
  const { scrollYProgress } = useViewportScroll();
  const triangleY = useTransform(scrollYProgress, [0.2, 0.6], [400, -400]);
  const scale = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1.1]);
  const scaleSecond = useTransform(scrollYProgress, [0.4, 0.8], [1.1, 0.9]);
  const scaleSpring = useSpring(scale, { stiffness: 200, bounce: 0 });
  const scaleSecondSpring = useSpring(scaleSecond, {
    stiffness: 200,
    bounce: 0,
  });
  return (
    <>
      {project.details?.map((item, index) => {
        return index % 2 === 0 && index <= 3 ? (
          <div key={index} className="project__details">
            <motion.div
              transition={{ ease: ease }}
              variants={shapeVariants}
              style={{ y: triangleY }}
              initial="grey"
              animate={bgColor === "white" ? "black" : "grey"}
              className="project__shape project__shape--triangle"
            />
            <motion.div
              initial="white"
              animate={bgColor === "white" ? "black" : "white"}
              variants={textVariants}
              className="project__details__text"
            >
              {item.text?.map((text, index) => {
                return (
                  <React.Fragment key={index}>
                    <p>{text}</p>
                    <br />
                  </React.Fragment>
                );
              })}
            </motion.div>
            <Image
              containerStyle={{ scale: scaleSpring }}
              containerClass="project__details--image"
              alt={`${project.title} - ${project.type} - Niloofar Nikookar`}
              src={item.image}
            />
          </div>
        ) : index <= 3 ? (
          <div className="project__details" style={{ alignItems: "center" }}>
            <Image
              containerStyle={{ scale: scaleSecondSpring }}
              transition={{ delay: 2 }}
              containerClass="project__details--image"
              alt={`${project.title} - ${project.type} Niloofar Nikookar`}
              src={item.image}
            />
            <div className="project__shape project__shape--octagon" />
            <motion.div
              initial="white"
              animate={bgColor === "white" ? "black" : "white"}
              variants={textVariants}
              className="project__details__text"
            >
              {item.text?.map((text, index) => {
                return (
                  <React.Fragment key={index}>
                    <p>{text}</p>
                    <br />
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div
            className="project__details"
            style={{
              flexFlow: "column nowrap",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <div className="project__shape project__shape--pentagon" />
            <Image
              containerStyle={{ scale: scaleSecondSpring }}
              transition={{ delay: 2 }}
              containerClass="project__details--image"
              alt={`${project.title} - ${project.type} Niloofar Nikookar`}
              src={item.image}
            />
            <motion.div
              initial="white"
              animate={bgColor === "white" ? "black" : "white"}
              variants={textVariants}
              className="project__details__text"
            >
              {item.text?.map((text, index) => {
                return (
                  <React.Fragment key={index}>
                    <p>{text}</p>
                    <br />
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectDetails;
