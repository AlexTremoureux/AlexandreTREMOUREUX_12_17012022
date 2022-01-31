import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Logo = () => (
  <Link className="logo" to={`/`}>
    <img src={logo} alt="" />
  </Link>
);

export default Logo;
