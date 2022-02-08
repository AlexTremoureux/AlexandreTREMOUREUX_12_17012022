import React from "react";
import "../styles/Name.css";

// Component Name for User.js
const Name = ({ data }) => (
  <>
    <h2 className="name_Title">
      Bonjour <span className="firstname">{data.userInfos.firstName}</span>
    </h2>
    <p className="name_text">
      Félicitation ! Vous avez explosé vos objectifs hier 👏
    </p>
  </>
);

export default Name;
