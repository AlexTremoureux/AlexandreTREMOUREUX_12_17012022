import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";


import "../styles/NavVerticale.css";
import { displayNavIcon } from "../utils/constantes";



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
