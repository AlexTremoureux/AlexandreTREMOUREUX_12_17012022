import React from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/TodayScore.css";

// Custom central label for RadialBarChart
const RenderCustomizedLabel = (props) => {
  const value = props.value;
  const text1 = "de votre";
  const text2 = "objectif";
  return (
    <>
      <text x={"41.5%"} y={"49%"} fill="#282D30" fontSize="26px" fontWeight={700}>
        {value + "%"}
      </text>
      <text x={"39%"} y={"59%"} fill="#282D30" fontSize="16px" fontWeight={500}>
        {text1}
      </text>
      <text x={"39.5%"} y={"68%"} fill="#282D30" fontSize="16px" fontWeight={500}>
        {text2}
      </text>
    </>
  );
};


const TodayScore = (data) => {
  return (
    <section className="section_todayScore white">
      <h4 className="section_todayScore_Title">Score</h4>
      <ResponsiveContainer className={"overWhite"} width="100%" height="100%" >
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="70%"
          startAngle= "90"
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
            label={RenderCustomizedLabel}
            barSize={10}
            dataKey="data"
            fill="#FF0000"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TodayScore;
