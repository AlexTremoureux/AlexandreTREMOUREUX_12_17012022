import React from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/TodayScore.css";

const TodayScore = ({ ...data }) => {
  return (
    <section className="section_todayScore white">
      <h4 className="section_todayScore_Title">Score</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="50%"
          startAngle={100}
          barSize={10}
          data={[data]}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            label={{ position: "center", fill: "#282D30" }}
            barSize={10}
            dataKey="data"
            fill="red"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TodayScore;
