import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <div className="home">
      <AnimatePresence>
        {initialLoading && (
          <Loading handleInitialLoading={() => setInitialLoading(false)} />
        )}
      </AnimatePresence>
      {!initialLoading && <ProgressBar />}
      {!initialLoading && <HomeHeader />}
    </div>
  );
};

export default Home;
