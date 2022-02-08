import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../styles/CallToAction.css";

// Component link button for page404, home and construction
const CallToAction = ({ dest, text }) => (
  <Link className="CTALink" to={dest}>
    {text}
  </Link>
);

CallToAction.propTypes = {
  dest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default CallToAction;
