import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import clsx from "clsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />
      <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
