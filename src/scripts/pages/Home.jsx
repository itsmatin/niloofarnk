import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <div className={"home"}>
      {/* <AnimatePresence> */}
      {initialLoading && (
        <Loading handleInitialLoading={() => setInitialLoading(false)} />
      )}
      {/* </AnimatePresence> */}
      {!initialLoading && (
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
      )}
    </div>
  );
};

export default Home;
