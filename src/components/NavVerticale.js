import React from "react";
import imgMeditation from "../images/iconMeditation.svg";
import imgNatation from "../images/iconNatation.svg";
import imgVelo from "../images/iconVelo.svg";
import imgMusculation from "../images/iconMusculation.svg";
import "../styles/NavVerticale.css";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

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
        <li>
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
