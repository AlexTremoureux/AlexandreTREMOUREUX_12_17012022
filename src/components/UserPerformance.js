import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/UserPerformance.css";

const UserPerformance = ({ data }) => {
  const translateKind = (kind) => {
    if (kind === 1) return "Cardio";
    if (kind === 2) return "Energie";
    if (kind === 3) return "Endurance";
    if (kind === 4) return "Force";
    if (kind === 5) return "Vitesse";
    if (kind === 6) return "Intensité";
  };

  return (
    <section className="section_performance grey">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="71%"
          innerRadius="5%"
          data={data.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={translateKind}
            stroke="white"
            dx={-2}
            dy={2}
            tickLine={false}
            tick={{ fontSize: 10, fontWeight: 500 }}
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
};

export default UserPerformance;
