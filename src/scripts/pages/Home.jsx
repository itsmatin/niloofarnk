import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";
import ProgressBar from "../components/ProgressBar";
import HomeDesigns from "../sections/HomeDesigns";
import HomeResearches from "../sections/HomeResearches";
import HomeEnding from "../sections/HomeEnding";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  return (
    <motion.div exit={{ opacity: 0 }} className="home">
      <AnimatePresence>
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
          <HomeEnding />
        </>
      )}
    </motion.div>
  );
};

export default Home;
