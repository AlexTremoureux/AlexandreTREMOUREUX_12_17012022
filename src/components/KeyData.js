import React from "react";
import PropTypes from 'prop-types';
import "../styles/KeyData.css";

// card component that indicates key data
const KeyData = ({ icon, color, count, unit, name }) => (
  <li className="li-keyData white">
    <div
      className="keyData_card"
      style={{
        backgroundImage: `url(${icon})`,
        backgroundColor: `${color}`,
      }}
    ></div>
    <div className="keyData_card_infos">
      <div className="keyData_card_infos_count">
        {count}
        {unit}
      </div>
      <div className="keyData_card_infos_title">{name}</div>
    </div>
  </li>
);
  
KeyData.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default KeyData;
