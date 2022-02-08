import React from "react";
import { Link } from "react-router-dom";

import imgMeditation from "../images/iconMeditation.svg";
import imgNatation from "../images/iconNatation.svg";
import imgVelo from "../images/iconVelo.svg";
import imgMusculation from "../images/iconMusculation.svg";
import Copyright from "./Copyright";

import "../styles/NavVerticale.css";

// Array of Future link of navigation
const displayNavIcon = [
  {
    icon: imgMeditation,
    alt: "Meditation",
    dest: "/prochainement"
  },
  {
    icon: imgNatation,
    alt: "Natation",
    dest: "/prochainement"
  },
  {
    icon: imgVelo,
    alt: "Velo",
    dest: "/prochainement"
  },
  {
    icon: imgMusculation,
    alt: "Musculation",
    dest: "/prochainement"
  },

]

const NavVerticale = () => (
  <aside className="nav-verticale">
    <ul className="nav-verticale_ul">

      {displayNavIcon.map(navIcon => (
        <li key={navIcon.alt}>
        <Link to={navIcon.dest}>
        <img src={navIcon.icon} alt={navIcon.alt} />
        </Link>
      </li>
      ))}

    </ul>
    <Copyright />
  </aside>
);

export default NavVerticale;
