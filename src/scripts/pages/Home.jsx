import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";
import ProgressBar from "../components/ProgressBar";
import HomeDesigns from "../sections/HomeDesigns";
import HomeResearches from "../sections/HomeResearches";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  return (
    <div className="home">
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
        </>
      )}
    </div>
  );
};

export default Home;
