import React from "react";
import imgMeditation from "../images/iconMeditation.svg";
import imgNatation from "../images/iconNatation.svg";
import imgVelo from "../images/iconVelo.svg";
import imgMusculation from "../images/iconMusculation.svg";
import "../styles/NavVerticale.css";
import Copyright from "./Copyright";

const NavVerticale = () => {
  return (
    <aside className="nav-verticale">
      <ul className="nav-verticale_ul">
        <li>
          <img src={imgMeditation} alt="" />
        </li>
        <li>
          <img src={imgNatation} alt="" />
        </li>
        <li>
          <img src={imgVelo} alt="" />
        </li>
        <li>
          <img src={imgMusculation} alt="" />
        </li>
      </ul>
      <Copyright />
    </aside>
  );
};

export default NavVerticale;
