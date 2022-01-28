import React from "react";

const Name = ({ data }) => {
  const userInfos = data.userInfos;
  return (
    <>
      <h2>
        Hello {userInfos.firstName} {userInfos.lastName}
      </h2>
    </>
  );
};

export default Name;
