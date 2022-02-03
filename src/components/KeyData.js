import React from "react";
import "../styles/KeyData.css";

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

export default KeyData;
