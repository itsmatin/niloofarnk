import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";
import ProgressBar from "../components/ProgressBar";
import HomeDesigns from "../sections/HomeDesigns";
import HomeResearches from "../sections/HomeResearches";
import Ending from "../sections/Ending";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  return (
    <motion.div exit={{ opacity: 0 }} className="home">
      <AnimatePresence initial>
        {initialLoading && (
          <Loading handleInitialLoading={() => setInitialLoading(false)} />
        )}
      </AnimatePresence>
      {!initialLoading && (
        <>
          <ProgressBar />
          <HomeHeader />
          <HomeDesigns />
          <HomeResearches />
          <Ending title="About Niloofar" to="/about" />
        </>
      )}
    </motion.div>
  );
};

export default Home;
