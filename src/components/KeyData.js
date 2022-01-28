import React from "react";

const KeyData = ({ data }) => {
  return (
    <div>
      <p>calories :{data.calorieCount}</p>
      <p>carbohydrate :{data.carbohydrateCount}</p>
      <p>lipides :{data.lipidCount}</p>
      <p>protéines :{data.proteinCount}</p>
      {
        console.log(data)
        /**
         *
         *
         *
         */
      }
    </div>
  );
};

export default KeyData;
