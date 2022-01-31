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

const formatDay = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};
const dayFormater = (day) => formatDay[day];
const CustomStyleToolTip = ({ payload, active }) =>
  active && (
    <div>
      <p>{payload[0].value} min</p>
    </div>
  );

const UserAverageSessions = ({ data }) => (
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
        <ReferenceLine x={6} stroke="red" label={data[4].sessionLength.value} />
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

export default UserAverageSessions;
