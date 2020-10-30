import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import LinkButton from "../components/LinkButton";
import { ease } from "../utils/config";

const buttonVariants = {
  initial: { opacity: 0, transition: { delay: 0.2, ease } },
  animate: { opacity: 1, transition: { ease } },
};
const footerVariants = {
  initial: {
    height: "0rem",
    transition: { delay: 0.2, ease },
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
    transition: { delay: 0.2, ease },
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
    transition: { delay: 0.2, ease },
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
    <motion.section
      exit="initial"
      animate="animate"
      initial="initial"
      className="contact"
    >
      <h1 className="contact__title">
        <AnimatedText>WANT TO</AnimatedText>
        <motion.span
          variants={buttonVariants}
          className="contact__title--underlined"
        >
          <AnimatedText>COLLABORATE?</AnimatedText>
        </motion.span>
      </h1>
      <h1 className="contact__title contact__title--second-line">
        <AnimatedText>GO AHEAD AND CONTACT ME!</AnimatedText>
      </h1>
      <motion.div variants={buttonVariants} className="contact--button-group">
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
      </motion.div>

      <motion.div
        transition={{ ease, delay: 0.3, duration: 0.7 }}
        variants={footerVariants}
        className="contact__footer"
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
          className="contact__footer__shape contact__footer__shape--triangle"
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
