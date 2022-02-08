import propTypes from "prop-types";
import React from "react";
import {
  Area,
  AreaChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
// convert day(number) to string
const dayFormater = (day) => formatDay[day];

const CustomStyleToolTip = ({ payload, active }) =>
  active && (
    <div>
      <p>{payload[0].value} min</p>
    </div>
  );

const CustomCursor = ({ points, width, height }) => {
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.2)"
      margin="10px"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

const UserAverageSessions = ({ data }) => (
  <section className="section_averageSessions red">
    <h4 className="UserAverageSessions_Title">Durée moyenne des sessions</h4>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="day"
          tickFormatter={dayFormater}
          fontSize="12px"
          stroke="rgba(255, 255, 255, 0.7)"
          padding={{ right: 10, left: 10 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis hide={true} domain={["dataMin", "dataMax+20"]} />
        <Tooltip
          cursor={<CustomCursor />}
          content={<CustomStyleToolTip />}
          wrapperStyle={{
            fontSize: "12px",
            textAlign: "center",
            backgroundColor: "#FFFFFF",
            padding: "0px 10px 0px 10px",
          }}
        />
        <Area
          type="monotone"
          dataKey="sessionLength"
          fill="rgba(255, 255, 255, 0.15)"
          stroke="#FFFFFF"
        />
      </AreaChart>
    </ResponsiveContainer>
  </section>
);

UserAverageSessions.propTypes = {
  data: propTypes.array.isRequired,
}
export default UserAverageSessions;
