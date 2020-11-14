import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuTriangle from "./MenuTriangle";
import { pink, black, white, ease } from "../utils/config";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, handleMenu }) => {
  const { pathname } = useLocation();
  return (
    <>
      <MenuTriangle menuOpen={menuOpen} handleMenu={handleMenu} />
      {pathname !== "/" ? (
        <Link to="/">
          <motion.span
            transition={{ delay: 0.05, ease }}
            whileHover={{ color: pink }}
            initial={{ color: white }}
            className="logo"
          >
            ن
          </motion.span>
        </Link>
      ) : (
        <motion.span style={{ cursor: "initial" }} className="logo">
          ن
        </motion.span>
      )}
    </>
  );
};

export default Navbar;
