import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuTriangle from "./MenuTriangle";
import { pink, white, ease } from "../utils/config";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, handleMenu }) => {
  const { pathname } = useLocation();
  return (
    <>
      <MenuTriangle menuOpen={menuOpen} handleMenu={handleMenu} />
      {!menuOpen ? (
        pathname !== "/" ? (
          <Link className="logo" to="/">
            <motion.span
              transition={{ delay: 0.05, ease }}
              whileHover={{ color: pink }}
              initial={{ color: white }}
            >
              ن
            </motion.span>
          </Link>
        ) : (
          <motion.span style={{ cursor: "initial" }} className="logo">
            ن
          </motion.span>
        )
      ) : null}
    </>
  );
};

export default Navbar;
