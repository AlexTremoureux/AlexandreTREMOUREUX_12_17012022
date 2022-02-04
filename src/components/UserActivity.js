import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../styles/UserActivity.css";

const UserActivity = ({ data }) => {
  console.log(data)
  const renderCustomBarLabel = (num) => ++num;
  const CustomTooltip = ({ payload: [kg, kCal], active }) =>
    active && <div className="custom-tooltip">
          <p> {`${kg.value} kg`}</p>
          <p> {`${kCal.value} kCal`}</p>
        </div>
  
  return (
    <section className="section_activity white">
      <h1 className="activity_Title">Activité quotidienne</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          barGap="10%"
          data={data.sessions}
          margin={{ top: 5, left: 15, bottom: 50 }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3"
            stroke="#dedede"
          />
          <XAxis
            dataKey={data.sessions.index}
            tickLine={false}
            axisLine={true}
            stroke="#DEDEDE"
            tick={{ fill: '#9B9EAC' }}
            tickFormatter={renderCustomBarLabel}
            padding={{ left: 0, right: 0 }}
            dy={16}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC' }}
            dx={25}
          />
          <Tooltip
            content={<CustomTooltip />}
            position={{ y: -15 }}
            wrapperStyle={{
              backgroundColor: "#E60000",
              color: "#FFFFFF",
              width: "72px",
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "80px",
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ top: -40, right: 100 }}
            layout="horizontal"
            verticalAlign="top"
            align="right"
          />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            barSize={15}
            radius={[5, 5, 0, 0]}
            ma
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default UserActivity;
