import React from "react";
import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import "../styles/UserAverageSessions.css";

const UserAverageSessions = ({ data }) => {
  const dayFormater = (day) => {
    if (day === 1) return "L";
    if (day === 2) return "M";
    if (day === 3) return "M";
    if (day === 4) return "J";
    if (day === 5) return "V";
    if (day === 6) return "S";
    if (day === 7) return "D";
  };
  const CustomStyleToolTip = ({ payload, active }) => {
    const valueTooltip = active && (
      <div>
        <p>{payload[0].value} min</p>
      </div>
    );
    return valueTooltip;
  };
  return (
    <section className="section_averageSessions red">
      <h4 className="UserAverageSessions_Title">Durée moyenne des sessions</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tickFormatter={dayFormater}
            stroke="rgba(255, 255, 255, 0.7)"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={<CustomStyleToolTip />}
            wrapperStyle={{
              backgroundColor: "white",
              textAlign: "center",
              padding: "0px 5px",
              fontSize: "14px",
            }}
          />
          <ReferenceLine
            x={6}
            stroke="red"
            label={data[4].sessionLength.value}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="2px"
            activeDot={{ r: 5 }}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default UserAverageSessions;
