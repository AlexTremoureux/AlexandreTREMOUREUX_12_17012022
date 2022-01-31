import React from "react";
import '../styles/Name.css'

const Name = ({ data }) => {
  const userInfos = data.userInfos;
  return (
    <>
      <h2 className="name_Title">
        Hello <span className="firstname">{userInfos.firstName}</span>
      </h2>
      <p className="name_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
};

export default Name;
