import React from "react";
import { Link } from "react-router-dom";
import "../styles/CallToAction.css";

// Component link button for page404, home and construction
const CallToAction = ({ dest, text }) => (
  <Link className="CTALink" to={dest}>
    {text}
  </Link>
);

export default CallToAction;
