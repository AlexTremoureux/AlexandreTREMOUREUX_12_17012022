import React from "react";
import CallToAction from "../components/CallToAction";
import "../styles/Page404.css";

const Page404 = () => (
  <section className="Page404">
    <p>Oops... Nous ne parvenons pas à trouver cet utilisateur!</p>
    <CallToAction dest='/' text="Revenir à l'accueil" />
  </section>
);

export default Page404;
