import React from "react";
import { motion } from "framer-motion";
import MenuTriangle from "./MenuTriangle";
import { pink, black, white, ease } from "../utils/config";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, handleMenu }) => {
  return (
    <>
      <MenuTriangle menuOpen={menuOpen} handleMenu={handleMenu} />
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
    </>
  );
};

export default Navbar;
