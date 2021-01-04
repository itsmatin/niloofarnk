import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";
import ProgressBar from "../components/ProgressBar";
import HomeDesigns from "../sections/HomeDesigns";
import HomeResearches from "../sections/HomeResearches";
import Ending from "../sections/Ending";
import { ease } from "../utils/config";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(
    !localStorage.getItem("introShown")
  );

  useEffect(() => {
    const introShown = localStorage.getItem("introShown");
    if (introShown) setInitialLoading(false);
  }, [localStorage]);
  return (
    <motion.div transition={{ ease }} exit={{ opacity: 0 }} className="home">
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
          <Ending title="About Me" to="/about" />
        </>
      )}
    </motion.div>
  );
};

export default Home;
