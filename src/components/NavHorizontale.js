import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavHorizontale.css";

const NavHorizontale = () => {
  return (
    <nav className="nav-horizontale">
      <ul className="nav-horizontale_ul">
        <Link className="nav_link_horizontal" to={`/`}>
          <li>Accueil</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/profil`}>
          <li>Profil</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/reglages`}>
          <li>Réglage</li>
        </Link>
        <Link className="nav_link_horizontal" to={`/communaute`}>
          <li>Communauté</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavHorizontale;
