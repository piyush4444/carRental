import React from "react";
import { assests } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={assests.logo} alt="logo" className=" h-8" />
      </Link>
    </div>
  );
};

export default Navbar;
