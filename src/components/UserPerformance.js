import propTypes from "prop-types";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/UserPerformance.css";

const formatKind = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};
// Translate english to french
const translateKind = (kind) => formatKind[kind];

const UserPerformance = ({ data }) => (
  <section className="section_performance grey">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        innerRadius="10%"
        data={data.data.reverse()}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={translateKind}
          stroke="white"
          dx={-2}
          dy={2}
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  </section>
);

UserPerformance.propTypes = {
  data: propTypes.object.isRequired,
}
export default UserPerformance;
