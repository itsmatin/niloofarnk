import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: "just", delay: 0.5 },
        }}
        className="home__title"
      >
        NILOOFAR NIKOOKAR IS <span>A DESIGNER</span> BASED IN LOS ANGELES CA.
      </motion.h1>
    </div>
  );
};

export default Home;
