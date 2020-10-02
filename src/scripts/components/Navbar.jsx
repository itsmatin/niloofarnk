import React from "react";
import MenuTriangle from "../elements/MenuTriangle";

const Navbar = ({ menuOpen, handleMenu }) => {
  return (
    <div className="navbar">
      <MenuTriangle menuOpen={menuOpen} handleMenu={handleMenu} />
    </div>
  );
};

export default Navbar;
