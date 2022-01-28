import React from "react";

const UserPerformance = ({ data }) => {
  return (
    <section className="section_averageSessions">
      <h1>Performance id: {data.userId}</h1>
    </section>
  );
};

export default UserPerformance;
