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
  return (
    <section className="section_activity">
      <h1 className="activity">Activité quotidienne</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={data.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={data.sessions.index} />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" barSize={15} radius={(0, 5)} />
          <Bar dataKey="calories" fill="#E60000" barSize={15} radius={5} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default UserActivity;
