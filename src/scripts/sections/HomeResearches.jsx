import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import database from "../utils/database";
import { ease, white, black } from "../utils/config";

const { researches } = database;

function ListItem({ ...props }) {
  return (
    <motion.li
      animate={{ opacity: 0.25, transition: { delay: 0.85 } }}
      initial={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
      exit={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
      whileHover={{ opacity: 1, borderBottom: `1px solid ${white}` }}
      className="menu__list--item"
    >
      <Link to={props.id} key={props.index}>
        {`0${props.index + 1}. ${props.title}`}
      </Link>
    </motion.li>
  );
}

const HomeResearches = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section className="home__researches">
      <h2 ref={titleRef} className="home__researches--title">
        <AnimatedText isVisible={titleInView}>RESEARCHES</AnimatedText>
      </h2>
      <div className="home__researches__container">
        {researches.map((item, index) => (
          <ListItem title={item.title} id={item.id} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default HomeResearches;
