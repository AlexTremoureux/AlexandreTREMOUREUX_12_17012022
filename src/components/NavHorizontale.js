import React from "react";
import { Link } from "react-router-dom";
import { displayNavLink } from "../utils/constantes";
import "../styles/NavHorizontale.css";


// Navigation Global
const NavHorizontale = () => (
  <nav className="nav-horizontale">
    <ul className="nav-horizontale_ul">

      {displayNavLink.map((link) => (
        <Link key={link.dest} className="nav_link_horizontal" to={link.route}>
          <li className="nav_link_horizontal_li">{link.dest}</li>
        </Link>
      ))}
      
    </ul>
  </nav>
);

export default NavHorizontale;
