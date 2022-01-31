import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavHorizontale.css";

const NavHorizontale = () => {
  return (
    <nav className="nav-horizontale">
      <ul className="nav-horizontale_ul">
        <Link className="nav_link_horizontal" to={`/`}>
          <li className="nav_link_horizontal_li">Accueil</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/profil`}>
          <li className="nav_link_horizontal_li">Profil</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/reglages`}>
          <li className="nav_link_horizontal_li">Réglage</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/communaute`}>
          <li className="nav_link_horizontal_li">Communauté</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavHorizontale;
