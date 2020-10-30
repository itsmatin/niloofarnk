import React, { createRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Cursor from "./components/Cursor";
import Scrollbar from "./components/Scrollbar";
import Contact from "./pages/Contact";
import TransitionContext from "./contexts/TransitionContext";
import Curtain from "./components/Curtain";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const ref = createRef();

  return (
    <TransitionContext.Provider value={{ transition, setTransition }}>
      <div ref={ref} className={clsx(["app", menuOpen && "no-scroll"])}>
        <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />
        {/* <Scrollbar pageRef={ref} /> */}
        <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/contact" render={() => <Contact />} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Cursor />
        <Curtain />
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
