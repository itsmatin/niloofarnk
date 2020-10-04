import React, { useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={clsx(["app", menuOpen && "no-scroll"])}>
      <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />
      <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
      <ProgressBar />
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
