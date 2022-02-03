import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css'

const CallToAction = ({dest, text}) => {
    return (
        <Link className="CTALink" to={dest}>
      {text}
    </Link>
    );
};

export default CallToAction;