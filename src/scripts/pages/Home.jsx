import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import HomeHeader from "../sections/HomeHeader";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  return (
    <div className="home">
      <AnimatePresence>
        {initialLoading && (
          <Loading handleInitialLoading={() => setInitialLoading(false)} />
        )}
      </AnimatePresence>

      {!initialLoading && <HomeHeader />}
    </div>
  );
};

export default Home;
