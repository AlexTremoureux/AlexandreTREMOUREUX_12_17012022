import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

// Logo of application SportSee
const Logo = () => (
  <Link className="logo" to={`/`}>
    <img src={logo} alt="logo" />
  </Link>
);

export default Logo;
