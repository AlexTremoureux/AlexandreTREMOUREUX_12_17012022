import React from "react";
import CallToAction from "../components/CallToAction";
import "../styles/Construction.css";

const Construction = () => (
  <div className="Construction_wrapper">
    <h4 className="Construction_Title">Page en cours de construction</h4>
    <p className="Construction_Text">
      Nous travaillons dur pour vous fournir cette nouvelle fonctionnalit√©
    </p>
    <CallToAction dest="/" text="Revenir √† l'accueil" />
  </div>
);

export default Construction;
