import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import LinkButton from "../components/LinkButton";
import { ease, white, black } from "../utils/config";

const footerVariants = {
  initial: {
    height: "0rem",
  },
  animate: {
    height: "9rem",
  },
};

const rectVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.5,
    marginTop: "0",
  },
  animate: {
    opacity: 1,
    rotate: 180,
    scale: 1.15,
    marginTop: "-5rem",
  },
};

const triangleVariants = {
  initial: {
    opacity: 0,
    rotate: 0,
    scale: 0.5,
    marginTop: "0",
  },
  animate: {
    opacity: 1,
    rotate: 135,
    scale: 1.15,
    marginTop: "-5rem",
  },
};
const Contact = () => {
  return (
    <motion.section animate="animate" initial="initial" className="contact">
      <h1 className="contact__title">
        <AnimatedText>WANT TO</AnimatedText>
        <span className="contact__title--underlined">
          <AnimatedText>COLLABORATE?</AnimatedText>
        </span>
      </h1>
      <h1 className="contact__title contact__title--second-line">
        <AnimatedText>GO AHEAD AND CONTACT ME!</AnimatedText>
      </h1>
      <div className="contact--button-group">
        <LinkButton
          title="LinkedIn"
          className="contact--button"
          to="/designs/12"
        />
        <LinkButton
          title="Email"
          className="contact--button"
          to="/designs/12"
        />
      </div>

      <motion.div
        transition={{ ease, delay: 0.3, duration: 0.7 }}
        variants={footerVariants}
        className="contact__footer"
        initial="initial"
        animate="animate"
      >
        <motion.div
          drag
          dragConstraints={{ left: -200, right: 400, bottom: 0, top: -400 }}
          transition={{ ease, delay: 0.5, duration: 1 }}
          variants={rectVariants}
          className="contact__footer__shape"
        />
        <motion.div
          transition={{ ease, delay: 0.7, duration: 1 }}
          variants={triangleVariants}
          className="contact__footer__shape"
        />
        <motion.div
          drag
          dragConstraints={{ left: -400, right: 400, bottom: 0, top: -200 }}
          transition={{ ease, delay: 0.7, duration: 1 }}
          variants={rectVariants}
          className="contact__footer__shape contact__footer__shape--circle"
        />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
